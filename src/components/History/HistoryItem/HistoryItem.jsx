import defaultGive from "../../../assets/images/iconGive.png"
import defaultReceive from "../../../assets/images/iconReceive.png";
import arrow from "../../../assets/images/Arrow 5.png"

import * as SC from './HistoryItemStyled'


const HistoryItem = ({
  date,
  amountGive,
  codeGive,
  amountReceive,
  codeReceive,
}) =>
{    
    return (
      <li>
        <p>{date}</p>
        <SC.DataHistoryItem>
          <img src={defaultGive} alt={codeGive} />
          <p>{amountGive}</p>
          <p>{codeGive}</p>
          <img src={arrow} alt="arrow" />
          <img
            src={defaultReceive}
            alt={codeGive}
          />
          <p>{amountReceive}</p>
          <p>{codeReceive}</p>
        </SC.DataHistoryItem>
      </li>
    );
};
 
export default HistoryItem;