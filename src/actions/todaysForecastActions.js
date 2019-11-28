import axios from 'axios';

export const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
const weatherApiLink = `https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`;

export const GET_TODAYS_FORECAST_REQUEST = 'GET_TODAYS_FORECAST_REQUEST';
export const GET_TODAYS_FORECAST_SUCCESS = 'GET_TODAYS_FORECAST_SUCCESS';
export const GET_TODAYS_FORECAST_FAIL = 'GET_TODAYS_FORECAST_FAIL';
export const SEND_TODAYS_FORECAST_NAME = 'SEND_TODAYS_FORECAST_NAME';

export function getTodaysForecast() {
  return function(dispatch) {
    dispatch({
      type: GET_TODAYS_FORECAST_REQUEST,
    });
    axios.get(weatherApiLink).then(r => {
      if(typeof r.data === 'object') {
        const forecast = r.data;

        dispatch({
          type: GET_TODAYS_FORECAST_SUCCESS,
          payload: forecast,
        });
      } else {
        dispatch({
          type: GET_TODAYS_FORECAST_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}