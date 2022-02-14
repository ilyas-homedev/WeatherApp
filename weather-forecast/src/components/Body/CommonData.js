import classes from './CommonData.module.css';
import Card from "../UI/Card";
import useTime from '../../hooks/useTime';

function CommonData(props) {
  // console.log('COMMON DATA component');
  const {hours, minutes, seconds, year, month, day, weekday} = useTime(new Date().getTime(), props.cityData.timezone);

  const {temp, feels_like} = props.cityData.main;
  const {icon, description} = props.cityData.weather[0];
  const {lon, lat} = props.cityData.coord;
  const name = props.cityData.name;
  const modifiedWeather = description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;


  const {humidity, pressure, sea_level, temp_max, temp_min} = props.cityData.main;
  const {sunrise, sunset} = props.cityData.sys;
  const timezone = props.cityData.timezone;
  const windSpeed = props.cityData.wind.speed;

  const {hours: sunriseHours, minutes: sunriseMinutes} = useTime(sunrise * 1000, timezone);
  const {hours: sunsetHours, minutes: sunsetMinutes} = useTime(sunset * 1000, timezone);

  const editedTimezone = timezone / 3600;

  return (
    <Card className={props.cardStyles}>
      <div className={classes.tempBtns}>
        <button>&#176;C</button>
        <button>&#176;F</button>
      </div>

      <div className={props.className}>
        <div className={classes.leftside}>
          <h2>{name}</h2>
          <p className={classes.date}>{day} {month} {year}, {weekday}</p>
          <p>{hours}:{minutes}:{seconds}</p>
          <div className={classes.coords}>
            <p>Coordinates:</p>
            <p className={classes.lonlat}>lon: {lon}</p>
            <p className={classes.lonlat}>lat: {lat}</p>
          </div>
        </div>
        <div className={classes.rightside}>
          <div className={classes.temperature}>
            <img src={iconUrl} alt="weather icon"/>
            <p>{temp} <span>&#176;C</span></p>
          </div>
          <hr/>
          <p>{modifiedWeather}</p>
          <hr/>
          <p>Feels like: <span className={classes.feelsLike}>{feels_like} <span>&#176;C</span></span></p>
        </div>
      </div>

      <hr/>

      <div className={classes.detailsData}>
        <p>Humidity: {humidity} %</p>
        <p>Wind: {windSpeed} m/s</p>
        <p>Sunrise: {sunriseHours}:{sunriseMinutes}</p>
        <p>Sunset: {sunsetHours}:{sunsetMinutes}</p>

        <p>Max temperature: {temp_max} &#176;C</p>
        <p>Min temperature: {temp_min} &#176;C</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Sea level: {sea_level ? sea_level + 'm' : '--'}</p>
    
        <p>Timezone: {editedTimezone > 0 ? '+' + editedTimezone : editedTimezone} hours</p>
      </div>  
    </Card>
  );
};

export default CommonData;