import Dropdown from "react-bootstrap/Dropdown";
import { Formik, Form, Field } from "formik";

import * as SC from "./ExchangeFormStyled"


const ExchangeForm = () => {
  return (
    <Formik initialValues={{ selectedOption: "" }}>
      {({ values, handleChange }) => (
        <SC.CustomForm>
          <SC.Label htmlFor="give">Give:</SC.Label>
          <SC.CustomDropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Field
                as={Dropdown.Item}
                name="selectedOption"
                value="Option 1"
                onSelect={handleChange}
              >
                Option 1
              </Field>
              <Field
                as={Dropdown.Item}
                name="selectedOption"
                value="Option 2"
                onSelect={handleChange}
              >
                Option 2
              </Field>
              <Field
                as={Dropdown.Item}
                name="selectedOption"
                value="Option 3"
                onSelect={handleChange}
              >
                Option 3
              </Field>
            </Dropdown.Menu>
            <SC.CustomInput type="text" name="give" placeholder="" />
          </SC.CustomDropdown>
          <div>
            <div>
              <p>1 ETH = 2800 USD</p>
              <SC.Label htmlFor="">Receive:</SC.Label>
            </div>
            <button>toggle</button>
          </div>

          <SC.CustomDropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Field
                as={Dropdown.Item}
                name="selectedOption"
                value="Option 1"
                onSelect={handleChange}
              >
                Option 1
              </Field>
              <Field
                as={Dropdown.Item}
                name="selectedOption"
                value="Option 2"
                onSelect={handleChange}
              >
                Option 2
              </Field>
              <Field
                as={Dropdown.Item}
                name="selectedOption"
                value="Option 3"
                onSelect={handleChange}
              >
                Option 3
              </Field>
            </Dropdown.Menu>
            <SC.CustomInput type="text" name="receive" placeholder="" />
          </SC.CustomDropdown>
          <div>
            <p>Комиссия: 0.1% = 0.15 ETH</p>
            <button>The Next Step</button>
          </div>
        </SC.CustomForm>
      )}
    </Formik>
  );
};

export default ExchangeForm;
