import { useEffect, useRef } from "react";
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import MainTextBox from "../../components/MainTextBox/MainTextBox";
import Illustration from "./Illustration";
import * as SC from "./MainPageStyled"
import { getAllCurrencies, getAllTradePairs } from "../../utilities/helpers";


const MainPage = () => {
    const allCurrencies = useRef([])
    const allTradePairs = useRef({})

useEffect (() => {
    const fetchAllCurrencies = async() => {
        const response = await getAllCurrencies()
        allCurrencies.current = response.data
        localStorage.setItem(
          "currenciesList",
          JSON.stringify(allCurrencies.current)
        );
    }
     const fetchAllTradePairs = async () => {
       const response = await getAllTradePairs();
       allTradePairs.current = response.data;
       localStorage.setItem(
         "tradePairsList",
         JSON.stringify(allTradePairs.current)
       );
     };
    fetchAllCurrencies()
    fetchAllTradePairs()

}, [])
    
    const storedCurrencies = localStorage.getItem("currenciesList");
    const storedTradePairs = localStorage.getItem("tradePairsList");
    const currenciesList = storedCurrencies ? JSON.parse(storedCurrencies) : [];
    const tradePairsList = storedTradePairs ? JSON.parse(storedTradePairs) : [];

    console.log(tradePairsList);
    
  return (
    <SC.MainPage>
      <SC.Container>
        <MainTextBox />
        <Illustration />
      </SC.Container>
      <ExchangeForm
        currenciesList={currenciesList}
        tradePairsList={tradePairsList}
      />
    </SC.MainPage>
  );
};

export default MainPage;
