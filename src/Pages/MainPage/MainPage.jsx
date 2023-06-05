import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import MainTextBox from "../../components/MainTextBox/MainTextBox";
import * as SC from "./MainPageStyled"


const MainPage = () => {
  return (
    <SC.MainPage>
          <MainTextBox />
          <ExchangeForm/>
    </SC.MainPage>
  );
};

export default MainPage;
