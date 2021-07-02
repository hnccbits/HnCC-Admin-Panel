import React from 'react';
import { Redirect, Route } from 'react-router';

function ProtectedRoute({ isAuth, component: Component, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) => {
        if (localStorage.getItem('authToken')) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
