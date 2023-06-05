import Dropdown from "react-bootstrap/Dropdown";

import * as SC from "./ExchangeFormStyled";
import { useEffect, useRef, useState } from "react";

const ExchangeForm = ({
  currenciesList,
  tradePairsList,
  tradeCurrencies,
  availableCurrencies,
}) => {
  const [symbols, setSymbols] = useState(["btc", "usd"]);

  const [currencyToGive, setCurrencyToGive] = useState("btc");
  const [currencyToReceive, setCurrencyToReceive] = useState(
    currenciesList[16]
  );

    const itemsGiveList = tradeCurrencies(currenciesList, tradePairsList);
    

  let availablePairs = useRef([currenciesList[16]]);

//   useEffect(() => {
//     const getMatch = () =>
//       tradePairsList
//         .filter((el) =>
//           currenciesList.filter((item) => el.base_unit === item.code)
//         )
//         .map((el) => el.quote_unit);

//     const match = tradePairsList.filter(
//       (el) => el.base_unit === currencyToGive.code
//     );

//     const test = () =>
//       currenciesList.filter((el) =>
//         tradePairsList.find((item) => el.code === item.base_unit)
//       );

//     const getCurrencyToReceive = () =>
//       currenciesList.filter((el) => arrayAvailablePairs.includes(el.code));
//     const arrayAvailablePairs = test();

//     availablePairs.current = getCurrencyToReceive();
//   }, [currenciesList, currencyToGive, tradePairsList]);

  const handleSelectGive = (eventKey) => {
    // const selectedCurrency = currenciesList.find((el) => el.code === eventKey);
    // setCurrencyToGive(selectedCurrency);
      setCurrencyToGive(eventKey);
  };

  const handleSelectReceive = (eventKey) => {
    const selectedCurrency = currenciesList.find((el) => el.code === eventKey);
    setCurrencyToReceive(selectedCurrency);
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
          <>
            <img
              src={currencyToReceive.icons.png_2x}
              alt={currencyToReceive.name}
              width={30}
            />
            <h3>{currencyToReceive.code}</h3>
          </>
        </SC.CustomDropdownToggle>

        <Dropdown.Menu>
          {availablePairs.current.map(({ id, name, code, icons }) => (
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


