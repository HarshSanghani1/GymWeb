import React, { useState } from 'react';
import styles from './Register.module.css';

import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      // Here you would typically make a request to your server with the registration data
      // and handle the response. For this example, we'll just simulate a successful registration.
      if (password === confirmPassword) {
        setError(null);
        setSuccess('Registration successful!');
        // Redirect to a protected route or do something else that indicates a successful registration
      } else {
        setError('Passwords do not match');
        setSuccess(null);
      }
    }
  };

  // Validate form function
  function validateForm() {
    // Validate username
    if (username.trim() === '') {
      alert('Username is required');
      return false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('Email is not valid');
      return false;
    }

    // Validate password
    if (password.trim() === '') {
      alert('Password is required');
      return false;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }

    // Validate confirm password
    if (confirmPassword.trim() === '') {
      alert('Confirm password is required');
      return false;
    }
    if (password!== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }

    // If all validations pass, submit the form
    return true;
  }

  return (
    <div className={styles.registrationForm}>
      <h2>Registration</h2>
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
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
        <br />
        <p>
        Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
}

export default RegistrationForm;