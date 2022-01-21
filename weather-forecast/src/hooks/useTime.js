import { useEffect, useState } from "react";

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const validateTime = (value) => {
  const time = value.toString();
  if (time.length === 1) {
    return '0' + time;
  } else {
    return time;
  };
};

const useTime = (milliseconds, timezone) => {
  const [fullDate, setFullDate] = useState(new Date(milliseconds + timezone * 1000 + new Date().getTimezoneOffset() * 60 * 1000));
  const invalidHours = fullDate.getHours();
  const invalidMinutes = fullDate.getMinutes();
  const invalidSeconds = fullDate.getSeconds();

  const hours = validateTime(invalidHours);
  const minutes = validateTime(invalidMinutes);
  const seconds = validateTime(invalidSeconds);

  const month = MONTHS[fullDate.getMonth()]
  const day = fullDate.getDate();
  const year = fullDate.getFullYear();
  const weekday = WEEKDAYS[fullDate.getDay()];

  useEffect(() => {
    const timer = setInterval(() => {
      setFullDate(new Date(milliseconds + timezone * 1000 + new Date().getTimezoneOffset() * 60 * 1000));
    }, 1000);

    return () => clearInterval(timer);
  });

  return {hours, minutes, seconds, year, month, day, weekday};
};

export default useTime;