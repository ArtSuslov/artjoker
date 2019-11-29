import React, { Component } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import { connect } from 'react-redux';
import { getTodaysForecast } from './actions/todaysForecastActions';
import { getFiveDaysForecast } from './actions/fiveDaysForecastActions';
import FiveDaysForecast from './components/fiveDaysForecast';
import dayjs from 'dayjs';
class App extends Component {
  componentDidMount() {
    this.props.getForecast();
    this.props.getFiveDaysForecast();
  }
  renderFiveDays () {
    const { weather } = this.props.fiveDaysForecast;
    const forecastArray = weather.length ? [...weather] : [];
    return (
      <div>
       {forecastArray.map((day, idx) => {
          const {dt_txt, main } = day;
         const date = dayjs().isValid(dt_txt)
           ? dt_txt
           : "";
         return (
              <div className='five-days-list' key={idx}>
                <span>{dayjs(date).format("dddd")}</span>
                <span className='five-days-temp'>{main.temp}°C</span>
              </div>
          )})}
      </div>
    )
  }
  render() {
    const { 
      isFetched: todaysForecastIsFetched, 
      weather: todaysWeather 
    } = this.props.todaysForecast;
    const { weather: fiveDaysWeather } = this.props.fiveDaysForecast;
    return (
      <div className='container box'>
        {todaysForecastIsFetched
          ? <WeatherCard weather={todaysWeather} /> 
          : <h1>Fetching content</h1>}
        <hr className='divider' />
        {this.renderFiveDays()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todaysForecast: state.todaysForecast,
    fiveDaysForecast: state.fiveDaysForecast,
  }
};
const mapDispatchToProps = dispatch => {
  return {
      getForecast: () => dispatch(getTodaysForecast()),
      getFiveDaysForecast: () => dispatch(getFiveDaysForecast()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
