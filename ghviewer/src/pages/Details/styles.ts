import styled, { keyframes } from 'styled-components';

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

export const ReposContainer = styled.section`
  margin-top: 80px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-top: 100px;
    color: ${(props) => props.theme.colors.text};
    animation: ${rotate} 2s linear infinite;
  }
`;

export const UserNotFound = styled.strong`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  padding-top: 100px;
`;
