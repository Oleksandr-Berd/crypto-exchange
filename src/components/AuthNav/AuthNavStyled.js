import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const AuthNav = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
`

export const Item = styled.li`
  padding-right: ${(props) => props.theme.space[9]};
  padding-left: ${(props) => props.theme.space[9]};
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};
  transition: color 300ms ease, border 300ms ease;

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[3]};
  }

  &:focus,
  &:hover {
    border: solid 1px #1f2a50;
    border-radius: ${(props) => props.theme.radius[1]};
    transition: border 300ms ease;
  }

  &:hover > *,
  &:focus > * {
    color: ${(props) => props.theme.color.hover};
    transition: color 300ms ease;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: ${(props) => props.theme.fontFamily.title};
  font-size: ${(props) => props.theme.size.XS};
  color: ${(props) => props.theme.color.text};

  transition: color 300ms ease;

`;
