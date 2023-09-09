import React from 'react'
import './Register.css'

const Register = (props) => {
  const selectedStyle = props.selectedStyle

  return (
    <div className={`${selectedStyle}`}>
      <h1>Cadastro</h1>
      <form>
        <div className={`input-${selectedStyle}`}>
          <label htmlFor="username">Nome</label>
          <input type="text" id="username" placeholder="Digitar o seu nome" required />
        </div>
        <div className={`input-${selectedStyle}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digitar o seu your email" required />
        </div>
        <div className={`input-${selectedStyle}`}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digitar a sua senha" required />
        </div>
        
        <div className={`button-${selectedStyle}`}>
          <button type="submit" disabled>Cadastrar</button>
        </div>
        <div className={`button-${selectedStyle}`}>
          <button className={`voltar-${selectedStyle}`} disabled>Voltar</button>
        </div>
      </form>
    </div>
  )
}

export default Register
