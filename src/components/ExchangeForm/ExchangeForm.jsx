import Dropdown from "react-bootstrap/Dropdown";

import * as SC from "./ExchangeFormStyled"
import { useState } from "react";


const ExchangeForm = ({ currenciesList }) => {
const [currencyToGive, setCurrencyToGive] = useState(null)

const handleSelect = (eventKey) => {
    const selectedCurrency = currenciesList.find((el) => el.code === eventKey);
    setCurrencyToGive(selectedCurrency);

};
    
    console.log(currencyToGive);
    
  return (
    <SC.CustomForm>
      <SC.Label htmlFor="give">Give:</SC.Label>
  
        <SC.CustomDropdown onSelect={handleSelect}>
          <SC.CustomDropdownToggle variant="primary" id="dropdown-basic">
            {currencyToGive ? (
              <>
                <img
                  src={currencyToGive.icons.png_2x}
                  alt={currencyToGive.name}
                  width={30}
                />
                <h3>{currencyToGive.code}</h3>
              </>
            ) : (
              <>
                <img
                  src={currenciesList[6].icons.png_2x}
                  alt={currenciesList[6].name}
                  width={30}
                />
                <h3>{currenciesList[6].code}</h3>
              </>
            )}
          </SC.CustomDropdownToggle>

          <Dropdown.Menu>
            {currenciesList.map(({ id, name, code, icons }) => (
              <Dropdown.Item
                key={id}
                name={name}
                eventKey={code}
                onChange={handleSelect}
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

      <SC.CustomDropdown>
        <SC.CustomDropdownToggle
          variant="primary"
          id="dropdown-basic"
        ></SC.CustomDropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item name="selectedOption" value="Option 1">
            Option 1
          </Dropdown.Item>
          <Dropdown.Item name="selectedOption" value="Option 2">
            Option 2
          </Dropdown.Item>
          <Dropdown.Item name="selectedOption" value="Option 3">
            Option 3
          </Dropdown.Item>
        </Dropdown.Menu>
        <SC.CustomInput type="text" name="receive" placeholder="" />
      </SC.CustomDropdown>
      <SC.ConWithNextStep>
        <p>The Fee: 0.1% = 0.15 ETH</p>
        <button>The Next Step</button>
      </SC.ConWithNextStep>
    </SC.CustomForm>
  );
};

export default ExchangeForm;
