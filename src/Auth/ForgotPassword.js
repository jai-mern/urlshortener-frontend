// ForgotPassword.js
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Email:', email);
    // You may want to send a request to your backend to initiate the password reset process
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="button" onClick={handleForgotPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
