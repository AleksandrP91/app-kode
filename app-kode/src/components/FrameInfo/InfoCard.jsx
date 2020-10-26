import React from 'react';
import classes from './../FrameInfo/InfoCard.module.css';
import Header from './Header/Header';

const InfoCard = function() {
  return (
    <div className={classes.frameCard}>
      <Header />
      <div className={classes.frameWrapp}>
        {/* <Select /> */}
      </div>
    </div>
  )
}

export default InfoCard;