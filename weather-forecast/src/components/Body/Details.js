import classes from './Details.module.css';
import Card from "../UI/Card";
import useTime from '../../hooks/useTime';

function Details(props) {
  console.log('DETAILS component');
  const {humidity, pressure, sea_level, temp_max, temp_min} = props.cityData.main;
  const {lon, lat} = props.cityData.coord;
  const {sunrise, sunset} = props.cityData.sys;
  const timezone = props.cityData.timezone;
  const windSpeed = props.cityData.wind.speed;

  const {hours: sunriseHours, minutes: sunriseMinutes} = useTime(sunrise * 1000, timezone);
  const {hours: sunsetHours, minutes: sunsetMinutes} = useTime(sunset * 1000, timezone);

  const editedTimezone = timezone / 3600;

  return (
    <Card className={props.className}>
      <div className={classes.detailsColumn}>
        <p>Humidity: {humidity} %</p>
        <p>Pressure: {pressure} mbar</p>
        <p>Sunrise: {sunriseHours}:{sunriseMinutes}</p>
        <p>Sunset: {sunsetHours}:{sunsetMinutes}</p>
      </div>
      <div className={classes.detailsColumn}>
        <p>Wind: {windSpeed} m/s</p>
        <p>Max temperature: {temp_max} &#176;C</p>
        <p>Min temperature: {temp_min} &#176;C</p>
        <p>Sea level: {sea_level ? sea_level + 'm' : '--'}</p>
      </div>
      <div className={classes.detailsColumn}>
        <p>Coordinates:</p>
        <p className={classes.lonlat}>lon: {lon}</p>
        <p className={classes.lonlat}>lat: {lat}</p>
        <p>Timezone: {editedTimezone > 0 ? '+' + editedTimezone : editedTimezone} hours</p>
      </div>
    </Card>
  );
};

export default Details;