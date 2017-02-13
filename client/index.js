import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import App from './components/App';
import styles from "./assets/css/style.css";

const store = createStore(
  compose(
    applyMiddleware(thunk, promise()),
    window.devToolsExtension ? window.devToolsExtension() : f => f // see redux state in chrome
  )  
);


render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
