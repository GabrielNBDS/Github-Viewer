import styled from 'styled-components';

export const UserInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;

      strong {
        font-size: 48px;
      }

      p {
        font-size: 36px;
      }
    }
  }

  .infos {
    display: flex;
    margin-top: 40px;

    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;

      div {
        margin-left: 0;
      }
    }
  }
`;

export const Info = styled.div`
  p {
    font-size: 24px;
  }
  strong {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 28px;
    }
  }
`;
