import React from 'react';
import classes from './Login.module.css';

const Login = function() {
  return (
    <div className={classes.loginWrapp}>
      <input type="text" placeholder="Code from SMS" name="password" required/>
      <button type="submit" className={classes.btn}></button>
    </div>
  )
}

export default Login;