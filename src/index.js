import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/index';
import styled, {injectGlobal} from 'styled-components';
import HyeonURL from './fonts/DoHyeon-Regular.ttf';
import RobotoURL from './fonts/Roboto-Regular.ttf';
import colors from './constants/colors';

injectGlobal`
  @font-face {
    font-family: hyeon;
    src: url(${HyeonURL});
  }
  @font-face {
    font-family: roboto;
    src: url(${RobotoURL});
  }
  html, body {
    margin: 0px; padding: 0px;
    font-family: roboto;
    width: 100%;
    height: 100%;
  }
  img {
    position: relative;
    max-width: 100%;
  }
  * {
    box-sizing: border-box;
    transition: 0.15s ease;
    color: ${colors.dark};
    border-radius: 2px;
    font-family: roboto;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 5px;
    padding: 0px;
  }
  a,h1,h2,h3,h4,h5,h6 {
    font-family: hyeon !important;
  }
  input[type=text], input[type=email], input[type=password] {
      -webkit-appearance: none;
      appearance: none;
      border: 1px solid ${colors.verylessfair};
      padding: 3px;
      border-radius: 2px;
      outline: none;
      &:hover {
        transform: scale(1.02);
      }
      &:focus {
        border: 1px solid ${colors.special};
        transform: scale(1.02);
      }
  }
  input[type=submit], button {
      -webkit-appearance: none;
      appearance: none;
      background: ${colors.special};
      border-left: 2px solid ${colors.fairspecial};
      border-right: 3px solid ${colors.darkspecial};
      border-top: none;
      border-bottom: none;
      color: ${colors.fair};
      padding: 5px 30px;
      font-family: roboto;
  }
`;

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
