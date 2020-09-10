import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    color: #222;
    font-size: 12px;
    font-family: Arial, Roboto, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
