import React, { useState } from 'react';
import { Redirect } from 'react-router';
import AuthApi from '../../api/AuthApi';
import { Input, Password } from '../Input';

const Login = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [redirect, setRedirect] = useState(null);

  const handleLogin = async () => {
    if (!username && !password) {
      alert('Please enter username and password');
      return;
    } else if (!username) {
      alert('Please enter username');
      return;
    } else if (!password) {
      alert('Please enter password');
      return;
    }

    const loggedIn = await AuthApi.login({
      email: username.trim(),
      password: password.trim(),
    });

    if (loggedIn.type === 'success') {
      console.log('Calling');
      setRedirect('/');
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="loginContainer">
      <div className="login">
        <h2 className="header">HnCC Admin Portal</h2>
        <form className="loginForm">
          <Input
            label="Username"
            autoComplete="true"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            placeholder={'Enter username'}
            type="email"
            value={username}
            required={true}
          />
          <Password
            label="Password"
            autoComplete="true"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            show={show}
            setShow={setShow}
            placeholder="Enter password"
            type={show ? 'text' : 'password'}
            required={true}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="login"
          >
            Login
          </button>
        </form>

        <div className="footer">
          <p className="app">HnCC Web Admin Portal</p>
          <p className="version">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
