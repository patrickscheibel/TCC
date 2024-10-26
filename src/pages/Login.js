import React from 'react'
import './Login.css'

const Login = (props) => {
  const daltonismo = props.daltonismo
  const tamanhoTexto = props.tamanhoTexto

  return (
    <div className={`login-${tamanhoTexto}`}>
      <div className='login'>
        <h1>Login</h1>
        <form>
          <div className='input-login'>
            <label htmlFor="username">Nome</label>
            <input type="text" id="username" placeholder="Digitar o seu nome" required />
          </div>
          <div className='input-login'>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digitar sua senha" required />
          </div>
          <div className={`button-login ${daltonismo}`}>
            <button type="submit" disabled>Entrar</button>
          </div>
          <div className={`button ${daltonismo}`}>
            <button className={`cadastro-button-login ${daltonismo}`} disabled>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login