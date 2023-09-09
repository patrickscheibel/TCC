import React from 'react'
import './Login.css'

const Login = (props) => {
  const selectedStyle = props.selectedStyle

  return (
    <div className={selectedStyle}>
      <h1>Login</h1>
      <form>
        <div className={`input-${selectedStyle}`}>
          <label htmlFor="username">Nome</label>
          <input type="text" id="username" placeholder="Digitar o seu nome" required />
        </div>
        <div className={`input-${selectedStyle}`}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digitar sua senha" required />
        </div>
        <div className={`button-${selectedStyle}`}>
          <button type="submit" disabled>Entrar</button>
        </div>
        <div className={`button-${selectedStyle}`}>
          <button className={`cadastro-button-${selectedStyle}`} disabled>Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login