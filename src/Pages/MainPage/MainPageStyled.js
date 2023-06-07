import styled from "styled-components"

export const MainPageContainer = styled.div`
  position: relative;

  background-color: ${(props) => props.theme.color.formBackground};
`;

export const MainPage = styled.div`

  display: flex;
  flex-direction: row;

  padding-top: ${(props) => props.theme.space[11]};
  padding-bottom: ${(props) => props.theme.space[12]};
  padding-left: ${(props) => props.theme.space[12]};

  background-color: ${(props) => props.theme.color.background};
`;

export const Container = styled.div`
 
`;

export const Image = styled.img`
position: absolute;

transform: translateY(25%);
z-index: 10;
`