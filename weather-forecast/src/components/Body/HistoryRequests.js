import React from 'react';
import classes from './HistoryRequests.module.css';
import Card from '../UI/Card';

function HistoryRequests(props) {
  console.log('HISTORY REQUEST component');
  const searchAgainHandler = (event) => {
    props.onSearch(event.target.textContent);
  }
  
  return (
    <Card className={classes.setBg}>
      <ul className={classes.historyList}>
        {props.requests.map(name => <li key={name} onClick={searchAgainHandler}>{name}</li>)}
      </ul>
    </Card>
  );
};

export default React.memo(HistoryRequests);