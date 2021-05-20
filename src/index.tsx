import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";

import createSagaMiddleware from 'redux-saga';
import {watchFetchWeatherData} from './components/saga/saga';


const sagaMiddleware = createSagaMiddleware();

const intialState = {
  weather: null,
  forecast: null,
};

function Reducer(state: any = intialState, action: any) {
  switch (action.type) {
    case "WEATHER_DATA":
      return {...state, ...action.payload};

    case "FORECAST_DATA":
      return{...state, ...action.payload}; 
    default:
      return state;
  }
}

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchWeatherData)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
