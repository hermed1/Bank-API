import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/userSlice';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username || !password) {
      setErrorMsg('Please enter your email and password.');
      return;
    }

    axios
      .post('http://localhost:3001/api/v1/user/login', {
        email: username,
        password: password,
      })
      .then((response) => {
        dispatch(setToken(response.data.body.token));
        navigate('/profile');
      })
      .catch((err) => {
        if (err.response?.status === 400 || err.response?.status === 401) {
          setErrorMsg('Invalid email or password.');
        } else {
          setErrorMsg('Sign-in failed. Please try again.');
        }
        console.error(err);
      });
  };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>

        {errorMsg && (
          <div className='alert-error' role='alert'>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>

          <button type='submit' className='sign-in-button'>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
