// pages/Login.js
import React, { useState } from 'react';
import styles from '../styles/login.module.css'; // Import your CSS module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked');
    // You may want to call an authentication function or API here
  };

  return (
    <div className={styles['login-container']}>
      {/* Use the className from the imported CSS module */}
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
