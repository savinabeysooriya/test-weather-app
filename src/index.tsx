import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";


const intialState = {
  weather: null,
  forecast: null,
};

function reducer(state: any = intialState, action: any) {
  switch (action.type) {
    case "WEATHER_DATA":
      return {
        weather: state.weather,
      };
    case "FORECAST_DATA":
      return {
        forecast: state.forecast,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

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
