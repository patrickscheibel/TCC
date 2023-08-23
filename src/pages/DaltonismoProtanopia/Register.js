import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <body>
      <div className="background"></div>
      <div className="login-container">
        <h1>Cadastro</h1>
        <form>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" disabled>Cadastrar</button>
        </form>
      </div>
    </body>
  );
};

export default Register;
