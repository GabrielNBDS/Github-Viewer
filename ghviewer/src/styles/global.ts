import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    color: #333;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button, a{
    cursor: pointer;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
