import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms/Forms';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapp">
        <form className="formPassword">
          <Forms />
        </form>
        <form className="formLogin">
          <Route path='/login' component={Login} />
        </form>
      </div>
    </BrowserRouter>
  );
}

export default App;
