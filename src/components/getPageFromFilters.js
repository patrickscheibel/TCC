import React from 'react'
import Normal_Dashboard from '../pages/Dashboard.js'
import Normal_Login from '../pages/Login.js'
import Normal_Register from '../pages/Register.js'

const getPageFromFilters = (filtroIdade, filtroProblemaVisao, filtroDaltonismo, filtroTelaExibida) => {
  let selectedStyle = '';

  selectedStyle += getSelectedStyleForIdade(filtroIdade)
  selectedStyle += getSelectedStyleForDaltonismo(filtroDaltonismo)
  selectedStyle += getSelectedStyleForProblemaVisao(filtroProblemaVisao)
  
  switch (filtroTelaExibida) {
    case 'dashboard':
      return <Normal_Dashboard selectedStyle={`dashboard${selectedStyle}`} />
    case 'login':
      return <Normal_Login selectedStyle={`login${selectedStyle}`} />
    case 'register':
      return <Normal_Register selectedStyle={`register${selectedStyle}`} />
    default:
      return <div>Página não encontrada.</div>
  }
}

function getSelectedStyleForIdade(filtroIdade) {
  switch (filtroIdade) {
    case 'idade_01_20':
    case 'idade_10_20':
      return '';
    case 'idade_20_30':
    case 'idade_30_40':
      return '';
    case 'idade_40_50':
    case 'idade_50_60':
      return '';
    case 'idade_60_70':
    case 'idade_70_80':
      return '';
    default:
      return '';
  }
}

function getSelectedStyleForDaltonismo(filtroDaltonismo) {
  switch (filtroDaltonismo) {
    case 'protanopia':
      return '-daltonismo-protanopia';
    case 'tritanopia':
      return '-daltonismo-tritanopia';
    case 'deuteranopia':
      return '-daltonismo-deuteranopia';
    default:
      return '';
  }
}

function getSelectedStyleForProblemaVisao(filtroProblemaVisao) {
  switch (filtroProblemaVisao) {
    case 'miopia_baixa':
      return '';
    case 'miopia_moderada':
      return '';
    case 'miopia_alta':
      return '';
    default:
      return '';
  }
}

export default getPageFromFilters