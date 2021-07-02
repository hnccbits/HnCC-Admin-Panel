import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import './assets/css/styles.css';

const App = () => {
  // Call user data using useEffect
  useEffect(() => {
    const ac = new AbortController();

    return () => ac.abort();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
