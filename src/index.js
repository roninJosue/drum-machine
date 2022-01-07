import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles";
import GlobalFonts from "./fonts/fonts";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


