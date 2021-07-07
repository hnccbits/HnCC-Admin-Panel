import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Home from '../components/Home/Home';
import Member from '../components/Member/Member';
import Final from '../components/Member/Final';
import Prefinal from '../components/Member/Prefinal';
import Sophomores from '../components/Member/Sophomore';
import Freshers from '../components/Member/Freshers';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/members" component={Member} />
        <Route exact path="/members/Final" component={Final} />
        <Route exact path="/members/Pre-Final" component={Prefinal} />
        <Route exact path="/members/Sophomores" component={Sophomores} />
        <Route exact path="/members/Freshers" component={Freshers} />
      </Switch>
    </>
  );
};

export default Routes;
