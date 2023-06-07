import historyData from "../../dataBase/history.json";
import HistoryItem from "./HistoryItem/HistoryItem";
import clockImg from "../../assets/images/clock 1.png"
import arrowLeft from "../../assets/images/mdi_keyboard_arrow_down.png"
import arrowRight from "../../assets/images/mdi_keyboard_arrow_right.png";


import * as SC from "./HistoryStyled"

const History = () => {

  return (
    <SC.HistoryContainer>
      <SC.MainContainer>
        <SC.Container>
          <img src={clockImg} alt="clock" />
          <h2>The Last Operations:</h2>
        </SC.Container>
        <SC.Container>
          <img src={arrowLeft} alt="arrowLeft"  />
          <img src={arrowRight} alt="arrowRight"  />
        </SC.Container>
      </SC.MainContainer>
      <SC.HistoryList>
        {historyData.map(
          ({
            id,
            date,
            iconGive,
            amountGive,
            codeGive,
            iconReceive,
            amountReceive,
            codeReceive,
          }) => (
            <HistoryItem
              key={id}
              id={id}
              date={date}
              iconGive={iconGive}
              iconReceive={iconReceive}
              amountGive={amountGive}
              codeGive={codeGive}
              amountReceive={amountReceive}
              codeReceive={codeReceive}
            />
          )
        )}
      </SC.HistoryList>
    </SC.HistoryContainer>
  );
};

export default History;
