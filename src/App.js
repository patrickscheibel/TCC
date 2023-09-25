import React, { useState } from 'react'
import Filtro from './components/Filtro'
import getPageFromFilters from './components/getPageFromFilters'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineReload } from 'react-icons/ai'
import optionsAge from './components/optionsAge'
import optionsView from './components/optionsView'
import optionsDaltonism from './components/optionsDaltonism'
import optionsPage from './components/optionsPage'
import './App.css'

const App = () => {
  const [filtro1, setFiltro1] = useState('todas')
  const [filtro2, setFiltro2] = useState('nenhum')
  const [filtro3, setFiltro3] = useState('normal')
  const [filtro4, setFiltro4] = useState('dashboard')
  const [filtrosVisiveis, setFiltrosVisiveis] = useState(true)

  const handleSelect1Change = (filtro) => {
    setFiltro1(filtro)
  }

  const handleSelect2Change = (filtro) => {
    setFiltro2(filtro)
  }

  const handleSelect3Change = (filtro) => {
    setFiltro3(filtro)
  }

  const handleSelect4Change = (filtro) => {
    setFiltro4(filtro)
  }

  const handleToggleFiltros = () => {
    setFiltrosVisiveis((prevFiltrosVisiveis) => !prevFiltrosVisiveis)
  }

  const renderPagina = () => {
    return getPageFromFilters(filtro1, filtro2, filtro3, filtro4)
  }

  const handleResetClick = () => {
    handleSelect1Change('todas')
    handleSelect2Change('nenhum')
    handleSelect3Change('normal')
    handleSelect4Change('dashboard')
  }

  return (
    <form>
        {filtrosVisiveis && (
          <div className="todos-filtros">
            <div className="divisao-filtro">
              <div className="filtro-container">
                <label>Idade</label>
                <Filtro
                  options={optionsAge}
                  selectedValue={filtro1}
                  onSelectChange={handleSelect1Change}
                  selectedDefault={0}
                />
              </div>
              <div className="filtro-container">
                <label>Grau de miopia</label>
                <Filtro
                  options={optionsView}
                  selectedValue={filtro2}
                  onSelectChange={handleSelect2Change}
                  selectedDefault={0}
                  />
              </div>
            </div>
            <div className="divisao-filtro">
              <div className="filtro-container">
                <label>Daltonismo</label>
                <Filtro
                  options={optionsDaltonism}
                  selectedValue={filtro3}
                  onSelectChange={handleSelect3Change}
                  selectedDefault={0}
                />
              </div>
              <div className="filtro-container">
                <label>Tela Exibida</label>
                <Filtro
                  options={optionsPage}
                  selectedValue={filtro4}
                  onSelectChange={handleSelect4Change}
                  selectedDefault={0}
                />
              </div>
            </div>  
            <div className="toggle-buttons">
              <button className="toggle-filtros-btn" type='reset' onClick={handleResetClick}>
                <AiOutlineReload />
              </button>
              <button className="toggle-filtros-btn" onClick={handleToggleFiltros}>
                <AiOutlineArrowUp />
              </button>
            </div>
          </div>
        )}
        {!filtrosVisiveis && (
        <button className="mostrar-filtro-btn" onClick={handleToggleFiltros}>
          <AiOutlineArrowDown />
        </button>
        )}
      <div className="conteudo-principal">{renderPagina()}</div>
    </form>
  )
}

export default App
