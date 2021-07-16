import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../components/Auth/Login';

function AuthFlow() {
  console.log('called');
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/*" component={Login} />
    </Switch>
  );
}

export default AuthFlow;
