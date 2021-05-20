import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getWeather, getForecast } from "./api/open-weather-map";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SearchView from "./components/SearchView/SearchView";
import WeatherView from "./components/WeatherView/WeatherView";
import ForecastView from "./components/ForecastView/ForecastView";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import {IntlProvider} from 'react-intl'
import English from './components/lang/en.json';
import China from './components/lang/ch.json';


import {PrivateRoute} from './components/PrivateRoute'

import { connect } from "react-redux";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {
  WEATHER_DATA,
  FORECAST_DATA,
} from "./components/Actiontypes/actionTypes";



interface Props {
  weather: any;
  forecast: any;
  
  fetchWeatherData: any;
  fetchForecastData: any;

}

const local = navigator.language;

let lang;
if(local === "en"){
  lang = English;
}else{
  lang =China;
}



function App(props: Props) {
  const [city, setCity] = useState<string>();

  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>();

  useEffect(() => {
    console.log(city);
    if (city !== undefined) {
      getWeather(city)
        .then((wResult: any) => {
          // set states
          setError(false);
          // setWeather(wResult.data);

          // props.weather = wResult.data;
          props.fetchWeatherData(wResult.data);

          // props.dispatch({
          //   type: "WEATHER_DATA",
          //   payload: { weather: wResult.data },
          // });

          // get latitude and longitude
          let { lat, lon } = wResult.data.coord;

          // call forecasting API
          getForecast(lat, lon).then((fResult: any) => {
            setError(false);

            // setForecast(fResult.data);
            // props.forecast =  fResult.data;
            props.fetchForecastData(fResult.data);

            // props.dispatch({
            //   type: "FORECAST_DATA",
            //   payload: { forecast: fResult.data },
            // });
          });
        })
        .catch((err) => {
          setError(true);
          setErrorText(err);
        });
    }
  }, [city]);

  useEffect(() => {}, [props.weather, props.forecast]);

  return (
    <div>
      <BrowserRouter>
      <Switch>

        <Route path="/signin" component={SignIn}/>
      
        

        <Route path="/signup" component={SignUp}/>
        

        <PrivateRoute path="/dashboard">

        <IntlProvider locale={local} messages={China}><Header /> </IntlProvider> 
      <Container maxWidth="md">
        <Grid>
          <SearchView setCity={setCity} />
          {error && <NotFound city={city} err={errorText} />}
          {!error && (
            <React.Fragment>
              {props.weather && <WeatherView weatherData={props.weather} />}
              {props.forecast && <ForecastView forecastData={props.forecast} />}
            </React.Fragment>
          )}
        </Grid>
      </Container>
      <Footer />
      </PrivateRoute>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchWeatherData: (data: any) =>
    dispatch({
      type: WEATHER_DATA,
      payload: { weather: data },
    }),

  fetchForecastData: (data: any) =>
    dispatch({
      type: FORECAST_DATA,
      payload: { forecast: data },
    }),
});

const mapStateToProps = (state: any) => ({
  weather: state.weather,
  forecast: state.forecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
