import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from './reducers/combineReducers';

const reduxStore = createStore(allReducers)

ReactDOM.render(
  <Provider store={reduxStore}>
  <App />
  </Provider>
,
  document.getElementById('root')
);


