import * as SC from "./HeaderStyled"

import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/Navbar";

const Header = () => {
  return (
    <SC.Header>
          <Logo />
          <NavBar />
          <AuthNav/>
    </SC.Header>
  );
};

export default Header;
