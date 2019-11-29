import React, { Component } from 'react';
import './App.css';
import TodaysForecast from './components/todaysForecast.js';
import fiveDaysForecast from './components/fiveDaysForecast';
import { connect } from 'react-redux';
import { getTodaysForecast } from './actions/todaysForecastActions';
import { getFiveDaysForecast } from './actions/fiveDaysForecastActions';

class App extends Component {
  componentDidMount() {
    this.props.getForecast();
    this.props.getFiveDaysForecast();
  }

  render() {
    const { 
      isFetched: todaysForecastIsFetched, 
      weather: todaysWeather 
    } = this.props.todaysForecast;
    return (
      <div>
        {todaysForecastIsFetched
          ? <TodaysForecast weather={todaysWeather} /> 
          : <h1>Wait</h1>}
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
