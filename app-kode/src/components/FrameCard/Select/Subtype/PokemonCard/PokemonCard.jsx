import React from 'react';
import classes from './../PokemonCard/PokemonCard.module.css';

const PokemonCard = function () {
  return (
    <div className={classes.card}>
      <div className={classes.img}></div>
      <div className={classes.title}></div>
      <div className={classes.subtitle}></div>
    </div>
  );
};

export default PokemonCard;