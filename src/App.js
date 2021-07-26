import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import './assets/css/styles.css';
import AuthContext from './context/Auth';
import { getToken } from './context/storage';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import 'react-notifications/lib/notifications.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(getToken());

  useEffect(() => {
    const accessToken = getToken();
    setLoggedInUser(accessToken);
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <Routes />
        </AuthContext.Provider>
        <NotificationContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
