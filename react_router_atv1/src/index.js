import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components'
import App from './App';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2? family = M + PLUS + Arredondado + 1c: wght @ 500 & display = swap');
    font-family: 'Roboto', sans-serif;
   
  }
  body{
    color: #4B4453;
    background: #C4FCEF;
  }
  #root{
    padding-top: 140px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);