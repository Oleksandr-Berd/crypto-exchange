
import * as SC from "./AuthNavStyled"

const AuthNav = () => {
    return (
      <SC.AuthNav>
        <SC.Item>
          <SC.Link to="login">LogIn</SC.Link>
        </SC.Item>
        <SC.Item>
          <SC.Link to="registration">Registration</SC.Link>
        </SC.Item>
      </SC.AuthNav>
    );
}
 
export default AuthNav;