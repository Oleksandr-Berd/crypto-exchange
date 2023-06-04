import styled from "styled-components"

export const Header = styled.header`
display: flex;
flex-direction: row;
align-items:center;

padding-top: ${props => props.theme.space[5]};
padding-left: ${props => props.theme.space[12]}
`