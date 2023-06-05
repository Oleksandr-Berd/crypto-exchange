import * as SC from "./HeaderStyled"

import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/Navbar";

const Header = () => {
  return (
    <SC.Header>
      <SC.Container>
        <Logo />
        <NavBar />
        <AuthNav />
      </SC.Container>
    </SC.Header>
  );
};

export default Header;
