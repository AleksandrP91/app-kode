import React from 'react';
import classes from './../FrameCard/FrameCard.module.css';
import Header from './Header/Header';
import Pokemon from './Pokemon/Pokemon';
import Select from './Select/Select';

const FrameCard = function () {
  return (
    <div className={classes.frameCard}>
      <Header />
      <div className={classes.frameWrapp}>
        <Select />
        <Pokemon />
      </div>
    </div>
  );
};

export default FrameCard;
