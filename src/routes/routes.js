import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Home from '../components/Home/Home';
import Member from '../components/Member';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/members" component={Member} />
      </Switch>
    </>
  );
};

export default Routes;
