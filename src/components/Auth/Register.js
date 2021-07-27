import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router';
import { register } from '../../api/AuthApi';
import { Input, Password } from '../Input';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [show, setShow] = useState(false);
  const [year, setYear] = useState('');
  const [redirect, setRedirect] = useState(null);

  const YEARS = useRef([]);

  useEffect(() => {
    const CreateYearArray = () => {
      let years = [];
      for (let i = 0; i <= 5; i++) {
        years.push(new Date().getFullYear() - i);
      }
      return years;
    };
    YEARS.current = CreateYearArray();
  }, []);

  const handleRegister = async () => {
    await register({
      email: email,
      password: password,
      user_name: username,
      year: year,
    }).then((res) => {
      if (res.type === 'success') {
        setRedirect('/');
      }
    });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <main className="loginContainer">
      <section className="login">
        <h2 className="header">HnCC Admin Portal</h2>
        <form className="loginForm">
          <Input
            label="Email"
            autoComplete="true"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'Enter email'}
            value={email}
            required={true}
            type="email"
          />
          <Input
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder={'Enter Username'}
            type="text"
            value={username}
            required={true}
          />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Select Batch"
          >
            {YEARS.current.map((item, index) => {
              return <option value={item} label={item} key={index}></option>;
            })}
          </select>
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
              handleRegister();
            }}
            className="login"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
}

export default Register;
