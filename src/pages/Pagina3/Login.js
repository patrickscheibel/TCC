import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <body>
        <div class="background"></div>
        <div class="login-container">
            <h1>Login 3</h1>
            <form>
                <div class="input-container">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required />
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" disabled>Login</button>
            </form>
        </div>
    </body>
  );
};

export default Login;