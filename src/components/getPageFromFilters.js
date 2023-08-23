import React from 'react';
import Normal_Dashboard from '../pages/Normal/Dashboard.js';
import Normal_Login from '../pages/Normal/Login.js';
import Normal_Register from '../pages/Normal/Register.js';
import DaltonismoProtanopia_Dashboard from '../pages/DaltonismoProtanopia/Dashboard.js';
import DaltonismoProtanopia_Login from '../pages/DaltonismoProtanopia/Login.js';
import DaltonismoProtanopia_Register from '../pages/DaltonismoProtanopia/Register.js';


const getPageFromFilters = (filtro1, filtro2, filtro3, filtro4) => {
  let paginaComponent = null;

  if (filtro1 === 'idade_10_20' && filtro2 === 'grau_2' && filtro3 === 'protanopia') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Normal_Dashboard />;
    } else if (filtro4 === 'login') {
      paginaComponent = <Normal_Login />;
    } else if (filtro4 === 'register') {
      paginaComponent = <Normal_Register />;
    }
  } else if (filtro3 === 'protanopia') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <DaltonismoProtanopia_Dashboard />;
    } else if (filtro4 === 'login') {
      paginaComponent = <DaltonismoProtanopia_Login />;
    } else if (filtro4 === 'register') {
      paginaComponent = <DaltonismoProtanopia_Register />;
    }
  } else if (filtro3 === 'normal') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Normal_Dashboard />;
    } else if (filtro4 === 'login') {
      paginaComponent = <Normal_Login />;
    } else if (filtro4 === 'register') {
      paginaComponent = <Normal_Register />;
    }
  } 

  if (paginaComponent) {
    return paginaComponent;
  }

  // Retorno padrão caso nenhuma correspondência seja encontrada
  return <div>Página não encontrada.</div>;
};

export default getPageFromFilters;
