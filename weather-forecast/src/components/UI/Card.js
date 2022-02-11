import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  // console.log('CARD component');
  const cardClasses = classes.card + ' ' + props.className;
  return <div className={cardClasses}>{props.children}</div>
};

export default React.memo(Card);