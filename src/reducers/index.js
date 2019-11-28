import { todaysForecastReducer } from './todaysForecastReducer';
import { combineReducers } from 'redux';
import { fiveDaysForecastReducer } from './fiveDaysForecastReducer';

export const rootReducer = combineReducers({
    todaysForecast: todaysForecastReducer,
    fiveDaysForecast: fiveDaysForecastReducer,
  });
  