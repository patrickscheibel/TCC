import React from 'react'
import './Register.css'

const Register = (props) => {
  const daltonismo = props.daltonismo
  const problemaVisao = props.problemaVisao

  return (
    <div className='register'>
      <h1>Cadastro</h1>
      <form className={`register-${problemaVisao}`}>
        <div className='input-register'>
          <label htmlFor="username">Nome</label>
          <input type="text" id="username" placeholder="Digitar o seu nome" required />
        </div>
        <div className='input-register'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digitar o seu email" required />
        </div>
        <div className='input-register'>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digitar a sua senha" required />
        </div>
        
        <div className={`button-register ${daltonismo}`}>
          <button type="submit" disabled>Cadastrar</button>
        </div>
        <div className={`button-register ${daltonismo}`}>
          <button className={`voltar-register ${daltonismo}`} disabled>Voltar</button>
        </div>
      </form>
    </div>
  )
}

export default Register
