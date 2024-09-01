import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={require('../assets/logo.png')} alt="Logo" className="login-logo" />
          <h2>LOG IN</h2>
        </div>
        <form>
          <div className="login-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="login-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="login-group remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
