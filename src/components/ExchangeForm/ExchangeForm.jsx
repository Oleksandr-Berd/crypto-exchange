import { useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Form, InputGroup } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";

import * as SC from "./ExchangeFormStyled";
import { ReactComponent as ToggleSvg } from "../../assets/images/toggle.svg";
import { ReactComponent as PathSvg } from "../../assets/images/Path.svg";

const ExchangeForm = ({
  currenciesList,
  tradePairsList,
  tradeCurrencies,
  availableCurrencies,
}) => {
  const [currencyToGive, setCurrencyToGive] = useState("btc");
    const [currencyToReceive, setCurrencyToReceive] = useState("usd");
    const [filterQuery, setFilterQuery] = useState("")

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
    
    const handleFilter = (evt) => {
        setTimeout(()=>{setFilterQuery(evt.target.value);}, 300)
        
    }

    const getVisibleItems = useMemo(() => {
        const normalizedFilter = filterQuery.trim().toLowerCase()
        return itemsGiveList.filter(
          (el) =>
            el.code.toLowerCase().includes(normalizedFilter) ||
            el.name.toLowerCase().includes(normalizedFilter)
        );
},[filterQuery, itemsGiveList])

    console.log(filterQuery);
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

        <SC.DropdownMenu>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <BiSearchAlt />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={handleFilter}
            />
          </InputGroup>
          <SC.DropDownMenuTitle>Currencies:</SC.DropDownMenuTitle>
          {getVisibleItems.map(({ id, name, code, icons }) => (
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
        </SC.DropdownMenu>
        <SC.CustomInput type="text" name="give" placeholder="" />
      </SC.CustomDropdown>
      <SC.ConWithToggle>
        <div>
          <p>1 ETH = 2800 USD</p>
          <SC.Label htmlFor="">Receive:</SC.Label>
        </div>
        <SC.ToggleBtn>
          <ToggleSvg />
        </SC.ToggleBtn>
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
        <SC.NextBtn>
          <span>The Next Step</span>
          <PathSvg />
        </SC.NextBtn>
      </SC.ConWithNextStep>
    </SC.CustomForm>
  );
};

export default ExchangeForm;
