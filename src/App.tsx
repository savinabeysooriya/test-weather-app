import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getWeather, getForecast } from "./api/open-weather-map";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SearchView from "./components/SearchView/SearchView";
import WeatherView from "./components/WeatherView/WeatherView";
import ForecastView from "./components/ForecastView/ForecastView";
import {connect} from 'react-redux';


function App() {



  const [city, setCity] = useState<string>();
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>()




  useEffect(() => {

    if (city !== undefined) {

      getWeather(city).then((wResult: any) => {
        // set states
        setError(false);
        setWeather(wResult.data);

        // get latitude and longitude
        let {lat, lon} = wResult.data.coord;
        
        // call forecasting API
        getForecast(lat, lon).then((fResult: any) => {
          setError(false);
          setForecast(fResult.data);
        });

      }).catch((err) => {
        setError(true);
        setErrorText(err);
      });

    }
  }, [city]);


  const dispatchWeatherData = (props:any) =>{

   props.dispatch({ type: "WEATHER_DATA"} )

  };

  const dispatchForecastData = (props:any) =>{

    props.dispatch({ type: "FORECAST_DATA"} )
 
   };


  return (
    <div>
      <Header />
      <Container maxWidth="md" >
        <Grid>
          <SearchView setCity={setCity} />
          {error && <NotFound city={city} err={errorText} />}
          {!error &&
            <React.Fragment>
              {weather && <WeatherView weatherData={weather} />}
              {forecast && <ForecastView forecastData={forecast} />}
            </React.Fragment>
          }
        </Grid> 
      </Container>
      <Footer />
    </div>
  );
}



const mapStateToProps = (state: any) =>({

  weather: state.weather,
  forecast: state.forecast

})

export default connect(mapStateToProps)(App);
