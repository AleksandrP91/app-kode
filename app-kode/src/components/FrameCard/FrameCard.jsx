import React from 'react';
import classes from './../FrameCard/FrameCard.module.css';
import Header from './Header/Header';
import Select from './Select/Select';

const FrameCard = function (props) {
  // debugger;

  return (
    <div className={classes.frameCard}>
      <Header />
      <div className={classes.frameWrapp}>
        <Select frameCard={props.frameCard}/>
      </div>
    </div>
  );
};

export default FrameCard;
