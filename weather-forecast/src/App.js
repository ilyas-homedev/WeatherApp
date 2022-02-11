import React, { useState } from 'react';
import apiKey from './pr/index';
import classes from './App.module.css';
import Header from './components/Header/Header';
import HistoryRequests from './components/Body/HistoryRequests';
import CommonData from './components/Body/CommonData';
import Loading from './components/UI/Loading';

function App() {
  console.log('APP component');
  const [historyRequests, setHistoryRequests] = useState([]);
  const [isHistoryExists, setIsHistoryExists] = useState(false);
  const [cityInformation, setCityInformation] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addToHistory = (cityName) => {
    const editedName = cityName.split(' ').map(word => word.charAt(0) + word.slice(1)).join(' ');
    if (historyRequests.includes(editedName)) {
      return;
    };
    setHistoryRequests([...historyRequests, editedName]);
    setIsHistoryExists(true);
  };

  const citySearch = async (cityName) => {
    setIsLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsLoading(false);
        throw new Error('Something wen wrong :(');
      };

      const data = await response.json();
      setCityInformation(data);
      addToHistory(data.name);
      setError(false);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setError(true);
    };
  };

  return (
    <React.Fragment>
      <Header onSearch={citySearch}/>
      {isLoading && <Loading />}
      {isHistoryExists && <HistoryRequests requests={historyRequests} onSearch={citySearch}/>}
      { cityInformation && <CommonData cityData={cityInformation} className={classes.commonData} cardStyles={classes.cardStyles}/>}
      { error && <div className={classes.error}><p>Something went wrong. Please try again.</p></div> }
    </React.Fragment>
  );
}

export default App;
