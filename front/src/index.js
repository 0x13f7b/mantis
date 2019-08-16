/**
 * @flow strict
 * @format
 */

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
library.add(faStroopwafel);
const rootElement = document.getElementById('root');
if (rootElement !== null) {
  ReactDOM.render(<App />, rootElement);
}
serviceWorker.unregister();
