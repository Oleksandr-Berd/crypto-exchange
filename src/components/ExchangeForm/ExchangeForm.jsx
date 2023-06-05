import Dropdown from "react-bootstrap/Dropdown";

import * as SC from "./ExchangeFormStyled";
import { useState } from "react";

const ExchangeForm = ({
  currenciesList,
  tradePairsList,
  tradeCurrencies,
  availableCurrencies,
}) => {

  const [currencyToGive, setCurrencyToGive] = useState("btc");
  const [currencyToReceive, setCurrencyToReceive] = useState("usd");

  const itemsGiveList = tradeCurrencies(currenciesList, tradePairsList);

  const itemsReceiveList = availableCurrencies(
    currencyToGive,
    currenciesList,
    tradePairsList
  );

  const handleSelectGive = (eventKey) => {
    setCurrencyToGive(eventKey);
  };

  const handleSelectReceive = (eventKey) => {
   
    setCurrencyToReceive(eventKey);
  };

  return (
    <SC.CustomForm>
      <SC.Label htmlFor="give">Give:</SC.Label>

      <SC.CustomDropdown onSelect={handleSelectGive}>
        <SC.CustomDropdownToggle variant="primary" id="dropdown-basic">
          {itemsGiveList &&
            itemsGiveList
              .filter((el) => el.code === currencyToGive)
              .map((el) => (
                <SC.DropDownCon key={el.code}>
                  <img src={el.icons.png_2x} alt={el.name} width={30} />
                  <h3>{el.code}</h3>
                </SC.DropDownCon>
              ))}
        </SC.CustomDropdownToggle>

        <Dropdown.Menu>
          {itemsGiveList.map(({ id, name, code, icons }) => (
            <Dropdown.Item
              key={id}
              name={name}
              eventKey={code}
              onChange={handleSelectGive}
            >
              <SC.InclusiveDropdownMenuCon>
                <img src={icons.png_2x} alt={name} width={30} />
                <h3>{code}</h3>
                <p>({name})</p>
              </SC.InclusiveDropdownMenuCon>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
        <SC.CustomInput type="text" name="give" placeholder="" />
      </SC.CustomDropdown>
      <SC.ConWithToggle>
        <div>
          <p>1 ETH = 2800 USD</p>
          <SC.Label htmlFor="">Receive:</SC.Label>
        </div>
        <button>toggle</button>
      </SC.ConWithToggle>

      <SC.CustomDropdown onSelect={handleSelectReceive}>
        <SC.CustomDropdownToggle variant="primary" id="dropdown-basic">
          {itemsReceiveList &&
            itemsReceiveList
              .filter((el) => el.code === currencyToReceive)
              .map((el) => (
                <SC.DropDownCon key={el.code}>
                  <img src={el.icons.png_2x} alt={el.name} width={30} />
                  <h3>{el.code}</h3>
                </SC.DropDownCon>
              ))}
        </SC.CustomDropdownToggle>

        <Dropdown.Menu>
          {itemsReceiveList.map(({ id, name, code, icons }) => (
            <Dropdown.Item
              key={id}
              name={name}
              eventKey={code}
              onChange={handleSelectReceive}
            >
              <SC.InclusiveDropdownMenuCon>
                <img src={icons.png_2x} alt={name} width={30} />
                <h3>{code}</h3>
                <p>({name})</p>
              </SC.InclusiveDropdownMenuCon>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
        <SC.CustomInput type="text" name="give" placeholder="" />
      </SC.CustomDropdown>
      <SC.ConWithNextStep>
        <p>The Fee: 0.1% = 0.15 ETH</p>
        <button>The Next Step</button>
      </SC.ConWithNextStep>
    </SC.CustomForm>
  );
};

export default ExchangeForm;


