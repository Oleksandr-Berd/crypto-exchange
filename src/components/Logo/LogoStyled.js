import styled from "styled-components"

export const Logo = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-right: ${props => props.theme.space[9]};
padding-right: ${props => props.theme.space[3]};
`

export const Text = styled.p`
  margin-left: ${(props) => props.theme.space[2]};

  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${props => props.theme.weight.bold};
  font-size: ${props => props.theme.size.S};
  color: ${props =>props.theme.color.logo};
`;