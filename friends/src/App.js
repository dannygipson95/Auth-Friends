import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/friendslist';

function App() {
  return (
    <Switch>
      <Route exact path = '/'>
        <Login/>
      </Route>
      <Route path = '/friendslist'>
        <FriendsList/>
      </Route>
    </Switch>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
