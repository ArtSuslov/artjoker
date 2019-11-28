import { GET_TODAYS_FORECAST_REQUEST, GET_TODAYS_FORECAST_SUCCESS, GET_TODAYS_FORECAST_FAIL } from '../actions/todaysForecastActions'

const initialState = {
  weather: {},
  isFetching: false,
  error: '',
}

export function todaysForecastReducer (state = initialState, action) {
  switch(action.type) {
    case GET_TODAYS_FORECAST_REQUEST:
      return { ...state, isFetching: true, error: ''};

    case GET_TODAYS_FORECAST_SUCCESS:
      return { ...state, isFetching: false, weather: action.payload};

    case GET_TODAYS_FORECAST_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
