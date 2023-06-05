import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import MainTextBox from "../../components/MainTextBox/MainTextBox";
import Illustration from "./Illustration";
import * as SC from "./MainPageStyled"


const MainPage = () => {
  return (
    <SC.MainPage>
      <SC.Container>
              <MainTextBox />
              <Illustration/>
      </SC.Container>
      <ExchangeForm />
    </SC.MainPage>
  );
};

export default MainPage;
