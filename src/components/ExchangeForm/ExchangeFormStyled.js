import { Field, Form } from "formik";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components"

export const CustomForm = styled(Form)`
  padding-top: ${(props) => props.theme.space[9]};
  padding-left: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[9]};

  background-color: ${(props) => props.theme.color.formBackground};

  text-align: left;
  border: 1px solid #d9e2ef;
  border-radius: ${(props) => props.theme.radius[3]};
`;

export const Label = styled.label`
  margin-bottom: ${(props) => props.theme.space[3]};

  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.S};

  &:not(:first-child) {
    margin-top: ${(props) => props.theme.space[4]};
  }
`;

export const CustomDropdown = styled(Dropdown)`
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};

  background-color: #f7f8fa;
  border: 1px solid #d9e2ef;
  border-radius: ${(props) => props.theme.radius[0]};
`;

export const CustomInput = styled(Field)`
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[3]};

  width: 326px;

  font-size: ${(props) => props.theme.size.S};
  font-family: ${(props) => props.theme.fontFamily.text};

  border: 1px solid #d9e2ef;
  border-radius: ${(props) => props.theme.radius[0]};
`;