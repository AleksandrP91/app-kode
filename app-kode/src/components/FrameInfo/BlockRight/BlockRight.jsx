import React from 'react';
import classes from './../BlockRight/BlockRight.module.css';

const BlockRight = function () {
  return (
    <div className={classes.blockLeft}>
      <div className={classes.blockRight}>
        <ul>
          <li className={classes.item}>Pokemon name</li>
          <li className={classes.item}>Type</li>
          <li className={classes.item}>Subtype</li>
          <hr />
          <li className={classes.item}>attackDamage</li>
          <li className={classes.item}>attackCost</li>
          <li className={classes.item}>resistances</li>
          <li className={classes.item}>evolvesFrom</li>
        </ul>
      </div>
    </div>
  );
};

export default BlockRight;
