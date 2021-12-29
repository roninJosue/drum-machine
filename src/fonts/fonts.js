import {createGlobalStyle} from "styled-components"
import RobotoWoff from './Roboto.woff'
import RobotoWoff2 from './Roboto.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto'), 
    url(${RobotoWoff}) format('woff'),
    url(${RobotoWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
`