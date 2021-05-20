import {takeEvery} from 'redux-saga/effects';

function* saveData(action){

    console.log(action);
    localStorage.setItem(action.payload);


}


export function* watchFetchWeatherData(){

    yield takeEvery('WEATHER_DATA', saveData)
}