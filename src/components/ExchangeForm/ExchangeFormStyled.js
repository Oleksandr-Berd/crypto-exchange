import { Dropdown } from "react-bootstrap";
import styled from "styled-components"

export const FormContainer = styled.div`

`

export const DropDownCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    margin-right: ${(props) => props.theme.space[2]};
  }

  & > h3 {
    margin-right: ${(props) => props.theme.space[1]};

    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamily.text};
    font-size: ${(props) => props.theme.size.S};
    font-weight: ${(props) => props.theme.weight.normal};
  }
`;

export const CustomForm = styled.form`
  padding-top: ${(props) => props.theme.space[9]};
  padding-left: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[9]};

  background-color: ${(props) => props.theme.color.formBackground};

  text-align: left;
  border: 1px solid #d9e2ef;
  border-radius: ${(props) => props.theme.radius[3]};
`;

export const Label = styled.label`

  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.S};

  &:not(:first-child) {
    margin-top: ${(props) => props.theme.space[4]};
  }
`;

export const CustomDropdown = styled(Dropdown)`
  display: flex;
  flex-direction: row;
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};

  background-color: #f7f8fa;
  border: 1px solid #d9e2ef;
  border-radius: ${(props) => props.theme.radius[0]};
`;

export const CustomInput = styled.input`
  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[3]};

  width: 326px;

  font-size: ${(props) => props.theme.size.S};
  font-family: ${(props) => props.theme.fontFamily.text};

  border: 1px solid #d9e2ef;
  border-radius: ${(props) => props.theme.radius[0]};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

export const CustomDropdownToggle = styled(Dropdown.Toggle)`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[3]};

  font-size: ${(props) => props.theme.size.S};
  background-color: ${(props) => props.theme.color.formBackground};
  color: ${(props) => props.theme.color.auth};
  border: 1px solid #d9e2ef;
  border-radius: 0;
`;

export const ConWithToggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const ConWithNextStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[9]};
`;

export const InclusiveDropdownMenuCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${(props) => props.theme.space[5]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};

  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: #f7f8fa;
    transition: background-color 300ms ease, color 300ms ease;
  }

  &:hover > *,
  &:focus > * {
    color: #ffa500;
    transition: color 300ms ease;
  }

  & > img {
    margin-right: ${(props) => props.theme.space[3]};
  }

  & > h3 {
    margin-right: ${(props) => props.theme.space[6]};

    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamily.text};
    font-size: ${(props) => props.theme.size.S};
    font-weight: ${(props) => props.theme.weight.normal};
  }

  & > p {
    font-size: ${(props) => props.theme.size.S};
    font-family: ${(props) => props.theme.fontFamily.text};
  }
`;