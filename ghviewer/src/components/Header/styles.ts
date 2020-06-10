import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    a {
      font-size: 24px;
      margin-left: 24px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
