import React from 'react';
import { useState } from 'react';
import useCurrentWeather from './useCurrentWeather';
import ButtonToogle from './ButtonToogle'
import useBackgroud from './useBackground';
import '../index.css'

const WeatherCardInfo = () => {
  const {
    city,
    country,
    temp,
    maxTemp,
    minTemp,
    humidity,
    windSpeed,
    weatherMain,
    weatherDescription,
    weatherIcon,
  } = useCurrentWeather();


  const { background } = useBackgroud();

  const [isCelcius, setIsCelcius] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(false);


  const toCelcius = () => {
    setIsCelcius(!isCelcius);
    setIsFahrenheit(false);
  };

  const toFahrenheit = () => {
    setIsFahrenheit(!isFahrenheit);
    setIsCelcius(false);
  };

  const changeUnits = (temp) => {
    temp = parseInt(temp);
    if (isCelcius === false && isFahrenheit === false) {
      return temp.toFixed();
    } else if (isCelcius) {
      temp = (temp - 273.15);
      return temp.toFixed();
    } else if (isFahrenheit) {
      temp = ((temp - 273.15) * (9 / 5) + 32);
      return temp.toFixed();
    }
  };

  const changeWindSpeedUnits = (windSpeed) => {
    windSpeed = parseInt(windSpeed);
    return (windSpeed * 3.6).toFixed();
  };

  return (
    <section className={`weather__card ${background}`}>
      <section className={`card`}>
        <main className={`card__main`}>
          <section className={`card__main--location`}>
            <span><i class="fa-solid fa-earth-americas"></i></span>
            <p>{`${city}, ${country}`}</p>
          </section>
          <section className={`card__main--info`}>
            <section className={`card__main--weather`}>
              <p>{weatherMain}</p>
            </section>
            <section className={`card__main--footer`}>
              <section className={`card__main--temp`}>
                <h1 className={`card__temperature`}>{changeUnits(temp)}</h1>
                <div className={`card__main--tempAux`}>
                  <p className={`card__main--deg`}>O</p>
                  <p className={`card__main--units`}>{`${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
                </div>
              </section>
              
            </section>
          </section>
        </main>
        <div className={`card__separator`}></div>
        <aside className={`card__aside`}>
          <section className={`card__aside--weather`}>
            <h2 className={`card__aside--description`}>{weatherDescription}</h2>
          </section>
          <section className={`card__aside--info`}>
            <div>
              <span><i class="fa-solid fa-temperature-full"></i></span>
              <p>{`${changeUnits(maxTemp)}°${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
            </div>
            <div>
              <span><i class="fa-solid fa-temperature-quarter"></i></span>
              <p>{`${changeUnits(minTemp)}°${isCelcius ? "C" : `${isFahrenheit ? "F" : "K"}`}`}</p>
            </div>
            <div>
              <span><i class="fa-solid fa-droplet"></i></span>
              <p>{`${humidity}%`}</p>
            </div>
            <div>
              <span><i class="fa-solid fa-wind"></i></span>
              <p>{`${changeWindSpeedUnits(windSpeed)}km/h`}</p>
            </div>
          </section>
          <section className={`card__aside--buttons`}>
            <ButtonToogle
              ButtonClass={`button__change--temp`}
              ButtonTextClass={isCelcius ? `button__text celcius active` : `button__text celcius`}
              ButtonTextContent='°C'
              IsClicked={toCelcius}
            />
            <div className={`button__separator`}></div>
            <ButtonToogle
              ButtonClass={`button__change--temp`}
              ButtonTextClass={isFahrenheit ? `button__text fahrenheit active` : `button__text fahrenheit`}
              ButtonTextContent='°F'
              IsClicked={toFahrenheit}
            />
          </section>
        </aside>
      </section>

    </section>
  );
};

export default WeatherCardInfo;