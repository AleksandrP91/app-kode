import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Login.module.css';

const Login = function () {

  let btnClouse = function() {
    return (
      document.querySelector('.formLogin').style.display = 'none'
    )
  }

  return (
    <div className={classes.loginWrapp}>
      <input type="text" placeholder="Code from SMS" name="password" required />
      <NavLink to='/framecard'>
        <button onClick={btnClouse} type="submit" className={classes.btn}></button>
      </NavLink>
    </div>
  );
};

export default Login;
