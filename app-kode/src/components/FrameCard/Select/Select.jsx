import React from 'react';
import classes from './../Select/Select.module.css';
import Subtype from './Subtype/Subtype';
import Type from './Type/Type';

const Select = function () {
  return (
    <div className={classes.select}>
      <Type />
      <Subtype />
    </div>
  );
};

export default Select;
