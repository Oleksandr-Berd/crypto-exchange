import styled from "styled-components"

export const Container = styled.div`
  width: 500px;
  margin-right: ${(props) => props.theme.space[10]};
  padding-top: ${(props) => props.theme.space[6]};

  text-align: left;
`;

export const Title = styled.h1`
margin-bottom: ${props => props.theme.space[4]};

font-family: ${props => props.theme.fontFamily.text};
font-size: ${props => props.theme.size.XM};
color: ${props => props.theme.color.text};
`;

export const Text = styled.p`
font-family: ${props => props.theme.fontFamily.text};
font-size: ${props => props.theme.size.S};
line-height: 1.45;
`