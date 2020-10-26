import React from 'react';
import classes from './../Select/Select.module.css';
import Subtype from './Subtype/Subtype';
import Type from './Type/Type';

const Select = function (props) {

  return (
    <div className={classes.select}>
      <Type />
      <Subtype frameCard={props.frameCard}/>
    </div>
  );
};

export default Select;
