import React from 'react';
import dayjs from 'dayjs';

const WeatherCard = props => {
  const { dt, main, name, sys, weather, wind } = props.weather;
  const date = dayjs().isValid(dt)
    ? dt
    : "";
  return (
    <div>
      <div className='content-header'>
        <h2 className='header-city'>{name}, {sys.country}</h2>
        <p className='header-date'>
          {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "},
          {" "}{weather[0].main}
        </p>
      </div>
      <h3>{main.temp}°C</h3>
      <h6>{wind.speed}m/s wind, {main.humidity}% humidity</h6>
    </div>
  );
}

export default WeatherCard;