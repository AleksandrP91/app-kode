import React from 'react';
import classes from './../Select/Select.module.css';

const Select = function () {
  return (
    <div className={classes.select}>
      <div className={classes.type}></div>
      <div className={classes.subtype}></div>
    </div>
  );
};

export default Select;
