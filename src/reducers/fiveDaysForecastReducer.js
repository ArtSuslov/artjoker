import { GET_FIVE_DAYS_FORECAST_REQUEST, GET_FIVE_DAYS_FORECAST_SUCCESS, GET_FIVE_DAYS_FORECAST_FAIL } from '../actions/fiveDaysForecastActions'

const initialState = {
  weather: {},
  isFetching: false,
  error: '',
}

export function fiveDaysForecastReducer (state = initialState, action) {
  switch(action.type) {
    case GET_FIVE_DAYS_FORECAST_REQUEST:
      return { ...state, isFetching: true, error: ''};

    case GET_FIVE_DAYS_FORECAST_SUCCESS:
      return { ...state, isFetching: false, weather: action.payload};

    case GET_FIVE_DAYS_FORECAST_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
