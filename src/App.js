import React from 'react';
import WeatherCardInfo from './components/WeatherCardInfo.js';
import useBackgroud from './components/useBackground.js';
import './index.css'

function App() {

  const { background } = useBackgroud();

  return (
    <div className={`App bg__${background}`}>
      <WeatherCardInfo />
    </div>
  );
}

export default App;
