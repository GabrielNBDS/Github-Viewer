import styled from 'styled-components';

export const Repo = styled.a`
  display: flex;
  flex: 1;
  height: 100px;
  padding: 24px;
  margin-bottom: 20px;

  background: ${(props) => props.theme.colors.repoBackground};
  border-radius: 10px;

  justify-content: space-between;
  align-items: center;

  div {
    strong {
      font-size: 32px;
      color: ${(props) => props.theme.colors.text};
    }

    p {
      font-size: 16px;
      color: ${(props) => props.theme.colors.text};
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};

    svg {
      margin-right: 10px;
    }
  }
`;
