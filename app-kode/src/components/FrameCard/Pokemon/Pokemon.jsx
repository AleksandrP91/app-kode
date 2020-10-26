import React from 'react';
import classes from './../Pokemon/Pokemon.module.css';

const Pokemon = function () {
  return (
    <div className={classes.pokemonCard}>
      <div className={classes.card}>
        <div className={classes.img}></div>
        <div className={classes.title}></div>
        <div className={classes.subtitle}></div>
      </div>
    </div>
  );
};

export default Pokemon;