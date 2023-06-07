import { useEffect, useRef, useState } from "react";
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import MainTextBox from "../../components/MainTextBox/MainTextBox";
import Illustration from "./Illustration";
import History from "../../components/History/History"
import * as SC from "./MainPageStyled";
import {
  getAllCurrencies,
  getAllTradePairs,
  getPrice,
} from "../../utilities/helpers";

const MainPage = () => {
  const [price, setPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const allCurrencies = useRef([]);
  const allTradePairs = useRef({});

  useEffect(() => {
    try {
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
    } catch (error) {
      setError(error.message);
    }
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

  const fetchPrice = async (symbols) => {
    try {
        const prices = await getPrice(symbols);
        
       
        setPrice(prices ? prices[1] : null);
    } catch (error) {
        console.log(error);
      setError(error.message);
    }
  };
    return (
      <div>
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
            fetchPrice={fetchPrice}
            price={price}
          />
          {error && <div>{error}</div>}
            </SC.MainPage>
            <History/>
      </div>
    );
};

export default MainPage;
