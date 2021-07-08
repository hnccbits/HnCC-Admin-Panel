import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Home from '../components/Home/Home';
import Member from '../components/Member/Member';
import Final from '../components/Member/Final';
import Prefinal from '../components/Member/Prefinal';
import Sophomores from '../components/Member/Sophomore';
import Freshers from '../components/Member/Freshers';
import Posts from '../components/Posts/Posts';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/members" component={Member} />
        <Route exact path="/members/final" component={Final} />
        <Route exact path="/members/prefinal" component={Prefinal} />
        <Route exact path="/members/sophomores" component={Sophomores} />
        <Route exact path="/members/freshers" component={Freshers} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </>
  );
};

export default Routes;
