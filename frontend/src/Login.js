import React, { useState } from 'react';
import styles from './Login.module.css';

import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      // Here you would typically make a request to your server with the login data
      // and handle the response. For this example, we'll just simulate a successful login.
      fetch('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
       .then(response => response.json())
       .then(data => {
          if (data.success) {
            setError(null);
            setSuccess('Login successful!');
            // Redirect to a protected route or do something else that indicates a successful login
          } else {
            setError('Invalid username or password');
            setSuccess(null);
          }
        })
       .catch(error => {
          console.error('Error:', error);
          setError('An error occurred while logging in');
          setSuccess(null);
        });
    }
  };

  // Validate form function
  function validateForm() {
    // Validate username
    if (username.trim() === '') {
      alert('Username is required');
      return false;
    }

    // Validate password
    if (password.trim() === '') {
      alert('Password is required');
      return false;
    }

    // If all validations pass, submit the form
    return true;
  }

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
        <p>
        Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
}

export default LoginForm;