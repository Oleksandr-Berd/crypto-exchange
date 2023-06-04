import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg";

import * as SC from "./LogoStyled"

const Logo = () => {
  return (
    <SC.Logo>
      <LogoSvg/>
      <SC.Text>crypto</SC.Text>
    </SC.Logo>
  );
};

export default Logo;
