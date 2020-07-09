import { createGlobalStyle } from 'styled-components';
import 'circular-std';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-size: 14px;
    color: #8492A6;
    font-family: CircularStd, Arial, Helvetica, sans-serif;
  }

  #root, body, html {
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
