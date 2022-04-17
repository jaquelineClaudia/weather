import useCurrentWeather from "./useCurrentWeather";

const useBackgroud = () => {

  const { weatherID } = useCurrentWeather();

  const useBackgroud = (weatherID) => {
    weatherID = parseInt(weatherID);
    if (weatherID >= 200 && weatherID <= 232) {
      return 'thunderstorm';
    } else if (weatherID >= 300 && weatherID <= 321) {
      return 'drizzle';
    } else if (weatherID >= 500 && weatherID <= 531) {
      return 'rain';
    } else if (weatherID >= 600 && weatherID <= 622) {
      return 'snow';
    } else if (weatherID >= 701 && weatherID <= 781) {
      return 'atmosphere';
    } else if (weatherID >= 801 && weatherID <= 804) {
      return 'clouds';
    } else if (weatherID === 800) {
      return 'clear';
    }
  };

  let background = useBackgroud(weatherID);

  return {
    background,
  };
};

export default useBackgroud;