import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import './assets/css/styles.css';
import AuthContext from './context/Auth';
import { getToken } from './context/storage';

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
      </BrowserRouter>
    </>
  );
};

export default App;
