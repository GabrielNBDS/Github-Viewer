import styled from 'styled-components';

export const Repo = styled.a`
  display: flex;
  flex: 1;
  height: 100px;
  padding: 24px;

  background: #fff;
  border-radius: 10px;

  justify-content: space-between;
  align-items: center;

  div {
    strong {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }
`;
