import navLinks from "../../dataBase/nav.json"

import * as SC from './NavBarStyled'



const NavBar = () => {
    return (<SC.NavBar>
        {navLinks.map(({ destination, name }) => ( <SC.Item key={name}><SC.Link to={destination}>{name}</SC.Link></SC.Item>))}
    </SC.NavBar> );
}
 
export default NavBar;