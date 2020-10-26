import React from 'react';
import classes from './../Subtype/Subtype.module.css';
import PokemonCard from './PokemonCard/PokemonCard';

const Subtype = function (props) {
  let pokemonElement = props.frameCard.map(function (elem) {
    return <PokemonCard name={elem.name} artist={elem.artist} />;
  });

  return (
    <div className={classes.subtype}>
      {pokemonElement}
      {/* <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard /> */}
    </div>
  );
};

export default Subtype;
