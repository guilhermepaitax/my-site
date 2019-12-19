import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F8F9FD;
    background: linear-gradient(to bottom, #F8F9FD 50%, #F8FAFD);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-size: 14px;
    color: #8492A6;
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
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
