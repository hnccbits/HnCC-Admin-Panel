import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [redirect, setRedirect] = useState(null);

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    } else {
      setRedirect('/home');
    }
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="loginContainer">
      <div className="login">
        <h2 className="header">HnCC Admin Portal</h2>
        <form className="loginForm">
          <div className="input">
            <label>Username</label>
            <input
              value={username}
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              autoComplete
            />
          </div>
          <div className="input">
            <label>Password</label>
            <div className="password">
              <input
                value={password}
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete
              />
              {show ? (
                <IoIosEye
                  color="#e4e6eb"
                  size={24}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <IoIosEyeOff
                  color="#e4e6eb"
                  size={24}
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          </div>

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
