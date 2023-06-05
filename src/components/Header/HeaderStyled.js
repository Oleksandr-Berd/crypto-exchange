import styled from "styled-components"

export const Header = styled.header`
  padding-right: ${(props) => props.theme.space[1]};
  padding-left: ${(props) => props.theme.space[1]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[11]};

  border-bottom: 1px solid #e6e6e6;
`;