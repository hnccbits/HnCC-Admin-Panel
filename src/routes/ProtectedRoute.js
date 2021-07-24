import React from 'react';
import { Redirect, Route } from 'react-router';
import { getToken } from '../context/storage';

function ProtectedRoute({ component: Component, ...otherProps }) {
  const token = getToken();
  return (
    <Route
      {...otherProps}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
