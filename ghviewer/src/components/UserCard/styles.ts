import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex: 1;

  margin-bottom: 24px;

  background: ${(props) => props.theme.colors.repoBackground};
  border-radius: 10px;
  padding: 24px;

  transition: transform 0.2s;
  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;

    strong {
      font-size: 32px;
      color: ${(props) => props.theme.colors.text};
    }

    p {
      font-size: 20px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
