import classes from './CommonData.module.css';
import Card from "../UI/Card";
import useTime from '../../hooks/useTime';

function CommonData(props) {
  console.log('COMMON DATA component');
  const {hours, minutes, seconds, year, month, day, weekday} = useTime(new Date().getTime(), props.cityData.timezone);

  const {temp, feels_like} = props.cityData.main;
  const weather = props.cityData.weather[0].description;
  const name = props.cityData.name;
  const modifiedWeather = weather.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <Card className={props.className}>
      <div className={classes.leftside}>
        <h2>{name}</h2>
        <p className={classes.date}>{day} {month} {year}, {weekday}</p>
        <p>{hours}:{minutes}:{seconds}</p>
      </div>
      <div className={classes.rightside}>
        <p className={classes.temperature}>{temp} <span>&#176;C</span></p>
        <hr/>
        <p>{modifiedWeather}</p>
        <hr/>
        <p>Feels like: <span className={classes.feelsLike}>{feels_like} <span>&#176;C</span></span></p>
      </div>
    </Card>
  );
};

export default CommonData;