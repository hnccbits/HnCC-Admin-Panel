import React, { useContext } from 'react';
import Screen from '../components/Screen';
import AuthContext from '../context/Auth';
import AppFlow from './AppFlow';
import AuthFlow from './AuthFlow';

function Routes() {
  const { loggedInUser } = useContext(AuthContext);
  return loggedInUser ? (
    <Screen>
      <AppFlow />
    </Screen>
  ) : (
    <AuthFlow />
  );
}

export default Routes;
