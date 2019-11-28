import axios from 'axios';
import { openWeatherApiKey } from './todaysForecastActions';

const weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`;

export const GET_FIVE_DAYS_FORECAST_REQUEST = 'GET_FIVE_DAYS_FORECAST_REQUEST';
export const GET_FIVE_DAYS_FORECAST_SUCCESS = 'GET_FIVE_DAYS_FORECAST_SUCCESS';
export const GET_FIVE_DAYS_FORECAST_FAIL = 'GET_FIVE_DAYS_FORECAST_FAIL';
export const SEND_FIVE_DAYS_FORECAST_NAME = 'SEND_FIVE_DAYS_FORECAST_NAME';

export function getFiveDaysForecast() {
  return function(dispatch) {
    dispatch({
      type: GET_FIVE_DAYS_FORECAST_REQUEST,
    });
    axios.get(weatherApiLink).then(r => {
      if(typeof r.data === 'object') {
        const forecast = r.data;

        dispatch({
          type: GET_FIVE_DAYS_FORECAST_SUCCESS,
          payload: forecast,
        });
      } else {
        dispatch({
          type: GET_FIVE_DAYS_FORECAST_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}