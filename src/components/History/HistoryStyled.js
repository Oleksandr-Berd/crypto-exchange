import styled from "styled-components"

export const HistoryContainer = styled.div`

transform: translateY(-20%);

  max-width: ${(props) => props.theme.percentage[9]};
  margin-right: auto;
  margin-left: auto;
  padding-top: ${(props) => props.theme.space[9]};
  padding-bottom: ${(props) => props.theme.space[10]};

  background-color: ${(props) => props.theme.color.historyBackground};
  box-shadow: 0px 4px 55px #eeeefc;
  border-radius: 15px;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: row;

  margin-top: ${(props) => props.theme.space[9]};
  padding-left: ${(props) => props.theme.space[9]};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: ${(props) => props.theme.space[10]};
  padding-right: ${(props) => props.theme.space[10]};

`;

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;

font-size: ${props => props.theme.size.M};
font-family: ${props => props.theme.fontFamily.title};
color: ${props => props.theme.color.auth}
`