import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodaysForecast } from '../actions/todaysForecastActions'

class TodaysForecast extends Component {
    componentDidMount() {
        this.props.getForecast();
    }
    render() {
        return <h1> Hi, current </h1>
    }
}

const mapStateToProps = state => {
    return {
      forecast: state.todaysForecast.weather,
    }
  };
  const mapDispatchToProps = dispatch => {
    return {
        getForecast: () => dispatch(getTodaysForecast()),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(TodaysForecast);