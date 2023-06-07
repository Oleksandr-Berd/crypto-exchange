import styled from "styled-components";

export const Item = styled.li`
  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[9]};

  text-align: left;
  background-color: #fbfbff;
  border: 1px solid #d9e2ef;
  border-radius: 6px;

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[3]};
  }
`;

export const DataHistoryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};

  font-size: ${props => props.theme.size.S};
  font-family: ${props => props.theme.fontFamily.text};

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.space[2]};
  }
`;
