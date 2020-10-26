import React from 'react';
import classes from './../FrameInfo/InfoCard.module.css';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockRight from './BlockRight/BlockRight';
import Header from './Header/Header';

const InfoCard = function () {
  return (
    <div className={classes.frameCard}>
      <Header />
      <div className={classes.frameWrapp}>
      <BlockLeft />
      <BlockRight />
      </div>
    </div>
  );
};

export default InfoCard;
