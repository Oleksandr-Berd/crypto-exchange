import { NavLink } from "react-router-dom";
import navLinks from "../../dataBase/nav.json"

import * as SC from './NavBarStyled'



const NavBar = () => {
    return (<SC.NavBar>
        {navLinks.map(({ destination, name }) => ( <li key={name}><NavLink to={destination}>{name}</NavLink></li>))}
    </SC.NavBar> );
}
 
export default NavBar;