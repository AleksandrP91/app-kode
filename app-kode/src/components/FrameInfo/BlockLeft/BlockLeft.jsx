import React from 'react';
import classes from './../BlockLeft/BlockLeft.module.css';

const BlockLeft = function () {
  return (
    <div className={classes.blockLeft}>
      <div className={classes.img}></div>
      <p>
        Does 30 damage plus 20 more damage for each Energy attached to Dark
        Blastoise but not used to pay for this attack. You can't add more than
        40 damage in this way.
      </p>
    </div>
  );
};

export default BlockLeft;
