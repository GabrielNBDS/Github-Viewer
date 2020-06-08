import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 36px;

  margin-top: 80px;
  max-width: 350px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 20px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    max-width: 80%;
    padding: 0 24px;

    outline: 0;
    border-radius: 10px 0 0 10px;

    color: '#3a3a3a';
    border: 2px solid #fff;
    border-right: 0;
    font-size: 24px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    min-width: 20%;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0;
    border: 0;
    color: #fff;
    font-size: 16px;
  }
`;

export const UserCardsContainer = styled.div`
  margin-top: 80px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 30px;
`;
