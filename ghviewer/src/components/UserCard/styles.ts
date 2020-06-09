import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex: 1;

  margin-bottom: 24px;

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
    }

    p {
      font-size: 20px;
    }
  }
`;
