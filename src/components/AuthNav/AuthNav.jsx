import { NavLink } from "react-router-dom";

const AuthNav = () => {
    return (<nav>
        <li>
            <NavLink to="login">LogIn</NavLink>
            <NavLink to="registration">Registration</NavLink>
        </li>
    </nav> );
}
 
export default AuthNav;