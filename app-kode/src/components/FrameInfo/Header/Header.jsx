import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Header/Header.module.css';

const Header = function () {
  return (
    <div className={classes.header}>
      <NavLink to='/back' > &#8592; Back</NavLink>
      <NavLink to='/logout' >Logout</NavLink>
    </div>
  );
};

export default Header;
