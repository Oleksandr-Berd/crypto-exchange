import historyData from "../../dataBase/history.json";
import HistoryItem from "./HistoryItem/HistoryItem";

const History = () => {

  return (
    <div>
      <div>
        <div>
          <h2>The Last Operations:</h2>
        </div>
      </div>
      <ul>
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
      </ul>
    </div>
  );
};

export default History;
