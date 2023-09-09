import React from 'react'
import Normal_Dashboard from '../pages/Dashboard.js'
import Normal_Login from '../pages/Login.js'
import Normal_Register from '../pages/Register.js'

const getPageFromFilters = (filtro1, filtro2, filtro3, filtro4) => {
  let paginaComponent = null

  if (filtro1 === 'idade_10_20' && filtro2 === 'grau_1' && filtro3 === 'normal') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Normal_Dashboard selectedStyle='dashboard' />
    } else if (filtro4 === 'login') {
      paginaComponent = <Normal_Login selectedStyle='login'/>
    } else if (filtro4 === 'register') {
      paginaComponent = <Normal_Register />
    }
  } else if (filtro3 === 'protanopia') {
    if (filtro4 === 'dashboard') { 
      paginaComponent = <Normal_Dashboard selectedStyle='dashboard-daltonismo-protanopia' />
    } else if (filtro4 === 'login') {
      paginaComponent = <Normal_Login selectedStyle='login-daltonismo-protanopia' />
    } else if (filtro4 === 'register') {
      paginaComponent = <Normal_Register selectedStyle='register-daltonismo-protanopia' />
    }
  } else if (filtro3 === 'normal') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Normal_Dashboard selectedStyle='dashboard'/>
    } else if (filtro4 === 'login') {
      paginaComponent = <Normal_Login selectedStyle='login' />
    } else if (filtro4 === 'register') {
      paginaComponent = <Normal_Register selectedStyle='register' />
    }
  } 

  if (paginaComponent) {
    return paginaComponent
  }

  // Retorno padrão caso nenhuma correspondência seja encontrada
  return <div>Página não encontrada.</div>
}

export default getPageFromFilters
