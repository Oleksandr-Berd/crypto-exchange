import styled from "styled-components"

export const HistoryContainer = styled.div`
width: ${props => props.theme.percentage[8]};
margin-right: auto;
margin-left: auto;

background-color: ${props => props.theme.color.historyBackground};
`

export const HistoryList = styled.ul`
display: flex;
flex-direction: row;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: ${(props) => props.theme.space[10]};
  padding-right: ${(props) => props.theme.space[9]};

`;

export const Container = styled.div`
display: flex;
flex-direction: row;

align-items: center;

font-size: ${props => props.theme.size.M};
font-family: ${props => props.theme.fontFamily.title};
color: ${props => props.theme.color.auth}
`