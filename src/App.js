import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodaysForecast from './components/todaysForecast.js';
import fiveDaysForecast from './components/fiveDaysForecast';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TodaysForecast} />
          <Route path='/forecast5' component={fiveDaysForecast} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
