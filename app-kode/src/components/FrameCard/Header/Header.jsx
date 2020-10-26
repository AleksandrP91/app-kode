import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Header/Header.module.css';

const Header = function () {
  return (
    <div className={classes.header}>
      <NavLink to='/logout' >logout</NavLink>
    </div>
  );
};

export default Header;
