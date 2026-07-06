import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue managing civic reports with CivicPulse.</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-group">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="register-link">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
