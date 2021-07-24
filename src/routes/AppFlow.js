import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Member from '../components/Member/Member';
import Posts from '../components/Posts/Posts';
import Profile from '../components/Member/Profile';
import MemberByYear from '../components/Member/MemberByYear';
import Meet from '../components/Meet/Meet';
import PostCard from '../components/Posts/PostCard';
import Login from '../components/Auth/Login';
import ProtectedRoute from './ProtectedRoute';

const AppFlow = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/members" component={Member} />
        <ProtectedRoute exact path="/members/:year/:id" component={Profile} />
        <ProtectedRoute exact path="/members/profile" component={Profile} />
        <ProtectedRoute exact path="/members/:year" component={MemberByYear} />
        <ProtectedRoute exact path="/posts" component={Posts} />
        <ProtectedRoute exact path="/posts/:id" component={PostCard} />
        <ProtectedRoute exact path="/meet" component={Meet} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default AppFlow;
