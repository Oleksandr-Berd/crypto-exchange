import { useEffect, useRef, useState } from "react";
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import MainTextBox from "../../components/MainTextBox/MainTextBox";
import Illustration from "./Illustration";
import * as SC from "./MainPageStyled";
import { getAllCurrencies, getAllTradePairs } from "../../utilities/helpers";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const allCurrencies = useRef([]);
  const allTradePairs = useRef({});

  useEffect(() => {
    setIsLoading(true);
    const fetchAllCurrencies = async () => {
      const response = await getAllCurrencies();
      allCurrencies.current = response.data;
      localStorage.setItem(
        "currenciesList",
        JSON.stringify(allCurrencies.current)
      );
    };
    const fetchAllTradePairs = async () => {
      const response = await getAllTradePairs();
      allTradePairs.current = response.data;
      localStorage.setItem(
        "tradePairsList",
        JSON.stringify(allTradePairs.current)
      );
    };
    fetchAllCurrencies();
    fetchAllTradePairs();
  }, []);

  const storedCurrencies = localStorage.getItem("currenciesList");
  const storedTradePairs = localStorage.getItem("tradePairsList");
  const currenciesList = storedCurrencies ? JSON.parse(storedCurrencies) : [];
  const tradePairsList = storedTradePairs ? JSON.parse(storedTradePairs) : [];

  const tradeCurrencies = (currencies, pairsList) => {
    return currencies.filter(
      (el) => !!pairsList.find((item) => item.base_unit === el.code)
    );
  };

    
  const availableCurrencies = (code, currencies, pairsList) => {
    const allowedCodes = pairsList
      .filter((el) => el.base_unit === code)
        .map((el) => el.quote_unit);
    return currencies.filter((el) => allowedCodes.includes(el.code));
  };
  return (
    <SC.MainPage>
      <SC.Container>
        <MainTextBox />
        <Illustration />
      </SC.Container>
      <ExchangeForm
        currenciesList={currenciesList}
        tradePairsList={tradePairsList}
        tradeCurrencies={tradeCurrencies}
        availableCurrencies={availableCurrencies}
        isLoading={isLoading}
      />
    </SC.MainPage>
  );
};

export default MainPage;
