import { useEffect, useState } from "react";
import axios from "axios";

const useCurrentWeather = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState(0);
  const [feelsTemp, setFeelsTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [humidity, setHumidity] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0);
  const [weatherMain, setWeatherMain] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [icon, setIcon] = useState('')
  const [weatherID, setWeatherID] = useState(0);

  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  useEffect(() => {
    const success = (location) => {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=73211536b985c2da900d496dfee088ba`;
      axios.get(URL).then((response) => {
        setCity(response.data.name);
        setCountry(response.data.sys.country);
        setTemp(response.data.main.temp);
        setFeelsTemp(response.data.main.feels_like);
        setMaxTemp(response.data.main.temp_max);
        setMinTemp(response.data.main.temp_min);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);
        setWeatherMain(response.data.weather[0].main);
        setWeatherDescription(response.data.weather[0].description);
        setIcon(response.data.weather[0]?.icon);
        setWeatherID(response.data.weather[0].id);
      });
    };
    navigator.geolocation.getCurrentPosition(success);
    return (
      navigator.geolocation.getCurrentPosition(success)
    );
  }, [temp]);

  return {
    city,
    country,
    temp: temp.toFixed(),
    feelsTemp: feelsTemp.toFixed(),
    maxTemp: maxTemp.toFixed(),
    minTemp: minTemp.toFixed(),
    humidity,
    windSpeed: windSpeed.toFixed(1),
    weatherMain,
    weatherDescription,
    weatherIcon,
    weatherID,
  };
};

export default useCurrentWeather;
