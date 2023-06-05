import styled from "styled-components"

export const MainPage = styled.div`
position: relative;

  display: flex;
  flex-direction: row;

  padding-top: ${(props) => props.theme.space[11]};
  padding-bottom: ${(props) => props.theme.space[12]};
  padding-left: ${(props) => props.theme.space[12]};
`;

export const Container = styled.div`
 
`;

export const Image = styled.img`
position: absolute;

transform: translateY(25%);
`