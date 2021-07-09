import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Home from '../components/Home/Home';
import Member from '../components/Member/Member';
import Posts from '../components/Posts/Posts';
import Profile from '../components/Member/Profile';
import MemberByYear from '../components/Member/MemberByYear';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/members" component={Member} />
        <Route exact path="/members/:year/:id" component={Profile} />
        <Route exact path="/members/profile" component={Profile} />
        <Route exact path="/members/:year" component={MemberByYear} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </>
  );
};

export default Routes;
