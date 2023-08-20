import React from 'react';
import Pagina1_Dashboard from '../pages/Pagina1/Dashboard.js';
import Pagina1_Login from '../pages/Pagina1/Login.js';
import Pagina2_Dashboard from '../pages/Pagina2/Dashboard.js';
import Pagina2_Login from '../pages/Pagina2/Login.js';
import Pagina3_Dashboard from '../pages/Pagina3/Dashboard.js';
import Pagina3_Login from '../pages/Pagina3/Login.js';

const getPageFromFilters = (filtro1, filtro2, filtro3, filtro4) => {
  let paginaComponent = null;

  if (filtro1 === 'idade_01_10' && filtro2 === 'grau_1' && filtro3 === 'normal') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Pagina1_Dashboard />;
    } else if (filtro4 === 'login') {
      paginaComponent = <Pagina1_Login />;
    }
  } else if (filtro1 === 'idade_10_20' && filtro2 === 'grau_2' && filtro3 === 'protanopia') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Pagina2_Dashboard />;
    } else if (filtro4 === 'login') {
      paginaComponent = <Pagina2_Login />;
    }
  } else if (filtro1 === 'idade_20_30' && filtro2 === 'grau_3' && filtro3 === 'tritanopia') {
    if (filtro4 === 'dashboard') {
      paginaComponent = <Pagina3_Dashboard />;
    } else if (filtro4 === 'login') {
      paginaComponent = <Pagina3_Login />;
    }
  }

  if (paginaComponent) {
    return paginaComponent;
  }

  // Retorno padrão caso nenhuma correspondência seja encontrada
  return <div>Página não encontrada.</div>;
};

export default getPageFromFilters;
