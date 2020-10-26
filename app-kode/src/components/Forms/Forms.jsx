import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Forms/Forms.module.css';

const Forms = function (props) {

  let btnClock = function() {
    document.querySelector('.formLogin').style.display = 'block';
    document.querySelector('.formPassword').style.display = 'none';
  }

  return (
    <div className={classes.formsWrapp}>
      <input type="text" placeholder="Login" name="text" required />
      <input type="text" placeholder="Password" name="password" required />
      <NavLink to="/login">
        <button onClick={btnClock} type="submit" className={classes.btn}></button>
      </NavLink>
    </div>
  );
};

export default Forms;
