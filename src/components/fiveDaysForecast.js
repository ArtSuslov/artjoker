import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFiveDaysForecast } from '../actions/fiveDaysForecastActions'

class FiveDaysForecast extends Component {
    componentDidMount() {
        this.props.getForecast();
    }
    render() {
        return <h1> Hi, 5 days </h1>
    }
}

const mapStateToProps = state => {
    return {
      forecast: state.fiveDaysForecast.weather,
    }
  };
  const mapDispatchToProps = dispatch => {
    return {
        getForecast: () => dispatch(getFiveDaysForecast()),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(FiveDaysForecast);