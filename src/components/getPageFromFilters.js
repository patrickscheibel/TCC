import React from 'react'
import Normal_Dashboard from '../pages/Dashboard.js'
import Normal_Login from '../pages/Login.js'
import Normal_Register from '../pages/Register.js'

const getPageFromFilters = (filtroIdade, filtroProblemaVisao, filtroDaltonismo, filtroTelaExibida) => {
  let idade = getSelectedStyleForIdade(filtroIdade)
  let daltonismo = getSelectedStyleForDaltonismo(filtroDaltonismo)
  let problemaVisao = getSelectedStyleForProblemaVisao(filtroProblemaVisao)
  
  switch (filtroTelaExibida) {
    case 'dashboard':
      return <Normal_Dashboard idade={`${idade}`} daltonismo={`${daltonismo}`} problemaVisao={`${problemaVisao}`} />
    case 'login':
      return <Normal_Login idade={`${idade}`} daltonismo={`${daltonismo}`} problemaVisao={`${problemaVisao}`} />
    case 'register':
      return <Normal_Register idade={`${idade}`} daltonismo={`${daltonismo}`} problemaVisao={`${problemaVisao}`} />
    default:
      return <div>Página não encontrada.</div>
  }
}

function getSelectedStyleForIdade(filtroIdade) {
  switch (filtroIdade) {
    case 'idade_01_10':
    case 'idade_10_20':
      return 'idade_01_20';
    case 'idade_20_30':
    case 'idade_30_40':
      return 'idade_20_40';
    case 'idade_40_50':
    case 'idade_50_60':
      return 'idade_40_60';
    case 'idade_60_70':
    case 'idade_70_80':
      return 'idade_60_80';
    default:
      return '';
  }
}

function getSelectedStyleForDaltonismo(filtroDaltonismo) {
  switch (filtroDaltonismo) {
    case 'protanopia':
      return 'protanopia';
    case 'tritanopia':
      return 'tritanopia';
    case 'deuteranopia':
      return 'deuteranopia';
    default:
      return '';
  }
}

function getSelectedStyleForProblemaVisao(filtroProblemaVisao) {
  switch (filtroProblemaVisao) {
    case 'miopia_baixa':
      return 'miopia_baixa';
    case 'miopia_moderada':
      return 'miopia_moderada';
    case 'miopia_alta':
      return 'miopia_alta';
    default:
      return '';
  }
}

export default getPageFromFilters