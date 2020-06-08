import styled from 'styled-components';

export const Card = styled.div`
  display: flex;

  flex: 1;

  background: #fff;
  border-radius: 10px;
  padding: 24px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;

    strong {
      font-size: 32px;
      font-weight: 700;
    }

    p {
      font-size: 20px;
    }
  }
`;
