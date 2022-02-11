import React, { useRef, useState } from 'react';
import classes from './Header.module.css';

function Header(props) {
  console.log('HEADER component');
  const inputRef = useRef();
  const [placeholder, setPlaceholder] = useState("Enter the City");

  const submitHandler = (event) => {
    event.preventDefault();

    const cityName = inputRef.current.value;
    if (cityName === '') {
      setPlaceholder("Can't be empty!");
      return;
    };
    setPlaceholder("Enter the City");
    props.onSearch(cityName);
    inputRef.current.value = '';
  };

  return (
    <div className={classes.headerContainer}>
      <h1>Weather App</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <input type="text" placeholder={placeholder} ref={inputRef}/>
        </div>
        <button className={classes.search}>Search</button>
      </form>
    </div>
  );
}

export default React.memo(Header);