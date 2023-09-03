import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-normal">
      <h1>Login</h1>
      <form>
        <div className="input-login-normal">
          <label htmlFor="username">Nome</label>
          <input type="text" id="username" placeholder="Digitar o seu nome" required />
        </div>
        <div className="input-login-normal">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digitar sua senha" required />
        </div>
        <div className="button-login-normal">
          <button type="submit" disabled>Entrar</button>
        </div>
        <div className="button-login-normal">
          <button class="cadastro-button-login-normal" disabled>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;