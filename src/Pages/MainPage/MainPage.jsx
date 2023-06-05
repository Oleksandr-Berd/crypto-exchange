import { useEffect, useRef } from "react";
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import MainTextBox from "../../components/MainTextBox/MainTextBox";
import Illustration from "./Illustration";
import * as SC from "./MainPageStyled"
import { getAllCurrencies } from "../../utilities/helpers";


const MainPage = () => {
const allCurrencies = useRef([])

useEffect (() => {
    const fetchAllCurrencies = async() => {
        const response = await getAllCurrencies()
        allCurrencies.current = response.data
        localStorage.setItem(
          "currenciesList",
          JSON.stringify(allCurrencies.current)
        );
   }
fetchAllCurrencies()

}, [])
    
const storedCurrencies = localStorage.getItem("currenciesList");
const currenciesList = storedCurrencies ? JSON.parse(storedCurrencies) : [];
    
  return (
    <SC.MainPage>
      <SC.Container>
        <MainTextBox />
        <Illustration />
      </SC.Container>
      <ExchangeForm currenciesList={currenciesList} />
    </SC.MainPage>
  );
};

export default MainPage;
