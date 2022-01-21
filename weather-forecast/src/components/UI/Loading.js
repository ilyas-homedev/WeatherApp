import classes from './Loading.module.css';

function Loading() {
  console.log('LOADING component');
  return (
    <div className={classes.loading}>
      <div className={classes.square}>
        <div className={classes.squarePiece}></div>
        <div className={classes.squarePiece}></div>
        <div className={classes.squarePiece}></div>
        <div className={classes.squarePiece}></div>
      </div>
      <p className={classes.message}>Loading...</p>
    </div>
  );
};

export default Loading;