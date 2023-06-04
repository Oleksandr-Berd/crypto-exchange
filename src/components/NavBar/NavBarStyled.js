import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const NavBar = styled.nav`
display: flex;
flex-direction: row;
align-items: center;

margin-right: ${props => props.theme.space[13]};
`

export const Item = styled.li`
&:not(:last-child){
    margin-right: ${props => props.theme.space[9]};
}
`
export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: ${(props) => props.theme.fontFamily.title};
  font-size: ${(props) => props.theme.size.XS};
  color: ${(props) => props.theme.color.text};

  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};
    transition: color 300ms ease;
  }
`;