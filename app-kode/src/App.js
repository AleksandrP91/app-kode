import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms/Forms';
import FrameCard from './components/FrameCard/FrameCard';
import InfoCard from './components/FrameInfo/InfoCard';
import Login from './components/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapp">
        <form className="formPassword">
          <Forms />
        </form>
        <form className="formLogin">
          <Route path="/login" component={Login} />
        </form>
        <div className="frameCard">
          <Route path="/framecard" render={() => <FrameCard frameCard={props.stateApp.frameCard}/>}/>
          <Route path="/back" render={() => <FrameCard frameCard={props.stateApp.frameCard}/>}/>
        </div>
        <div className="frameInfo">
          <Route path="/logout" component={InfoCard} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
// render={() => <Dialogs dialogsData={props.stateApp.dialogsPage.dialogsData}