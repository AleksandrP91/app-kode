import React from 'react';
import classes from './../PokemonCard/PokemonCard.module.css';

const PokemonCard = function (props) {
  return (
    <div className={classes.card}>
      <div className={classes.img}></div>
      <div className={classes.title}>
        <p>{props.name}</p>
      </div>
      <div className={classes.subtitle}>
        <p>{props.artist}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
