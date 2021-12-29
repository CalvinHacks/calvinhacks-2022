import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import resume from './pages/resume'
import { Component, useState } from 'react/cjs/react.development';

const GuardedRoute = ({component: Component, auth, ...rest}) => {
console.log("auth:" + auth)
  return (
    <Route {...rest} render={(props) => (
      auth === true
        ? <Component {...props} />
        : <Redirect to= '/' />
    )} />
  )
}

function App() {

  const [isAutheticated, setisAutheticated] = useState(false);

  // onAuthStateChanged = (is) => {
  //   setUser(user);
  //   if (initializing) setisAutheticated(true);
  // }

  return (
    <Router>
      <Switch>
        <Route path= "/" component={Home} exact />
        <Route path= "/signin" component={SigninPage} exact />
        <Route path= "/signup" component={SignUpPage} exact />
        <GuardedRoute path= '/resume' component={resume} auth={isAutheticated} />
      </Switch>
    </Router>
  );
}

export default App;
