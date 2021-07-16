import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import './assets/css/styles.css';
import AuthContext from './context/Auth';
import storageTokens from './context/storage';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(storageTokens.getToken());

  useEffect(() => {
    const ac = new AbortController();
    checkStatus();

    return () => ac.abort();
  }, []);

  const checkStatus = async () => {
    const accessToken = storageTokens.getToken();
    setLoggedInUser(accessToken);
  };

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
