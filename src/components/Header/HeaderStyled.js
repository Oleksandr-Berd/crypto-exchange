import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[12]};

  border-bottom: 1px solid #e6e6e6;
`;