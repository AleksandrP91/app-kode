import React from 'react';
import classes from './../Subtype/Subtype.module.css';
import PokemonCard from './PokemonCard/PokemonCard';

const Subtype = function () {
  return (
    <div className={classes.subtype}>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default Subtype;
