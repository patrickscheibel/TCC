import React, { useState } from 'react';
import Filtro from './components/Filtro';
import getPageFromFilters from './components/getPageFromFilters';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import optionsAge from './components/optionsAge';
import optionsView from './components/optionsView';
import optionsDaltonism from './components/optionsDaltonism';
import optionsPage from './components/optionsPage';
import './App.css';

const App = () => {
  const [filtro1, setFiltro1] = useState('');
  const [filtro2, setFiltro2] = useState('');
  const [filtro3, setFiltro3] = useState('');
  const [filtro4, setFiltro4] = useState('login');
  const [filtrosVisiveis, setFiltrosVisiveis] = useState(true);

  const handleSelect1Change = (filtro) => {
    setFiltro1(filtro);
  };

  const handleSelect2Change = (filtro) => {
    setFiltro2(filtro);
  };

  const handleSelect3Change = (filtro) => {
    setFiltro3(filtro);
  };

  const handleSelect4Change = (filtro) => {
    setFiltro4(filtro);
  };

  const handleToggleFiltros = () => {
    setFiltrosVisiveis((prevFiltrosVisiveis) => !prevFiltrosVisiveis);
  };

  const renderPagina = () => {
    return getPageFromFilters(filtro1, filtro2, filtro3, filtro4);
  }

  return (
    <div className="app-container">
      <div className="filtros-container">
        {filtrosVisiveis && (
          <div className="todos-filtros">
            <label>Idade:</label>
            <Filtro
              options={optionsAge}
              selectedValue={filtro1}
              onSelectChange={handleSelect1Change}
              selectedDefault={0}
            />
            <label>Problema de visão:</label>
            <Filtro
              options={optionsView}
              selectedValue={filtro2}
              onSelectChange={handleSelect2Change}
              selectedDefault={0}
            />
            <label>Daltonismo:</label>
            <Filtro
              options={optionsDaltonism}
              selectedValue={filtro3}
              onSelectChange={handleSelect3Change}
              selectedDefault={0}
            />
            <label>Tela Exibida</label>
            <Filtro
              options={optionsPage}
              selectedValue={filtro4}
              onSelectChange={handleSelect4Change}
              selectedDefault={1}
            />
            <button className="toggle-filtros-btn" onClick={handleToggleFiltros}>
              <AiOutlineArrowUp />
            </button>
          </div>
        )}
        {!filtrosVisiveis && (
        <button className="mostrar-filtro-btn" onClick={handleToggleFiltros}>
           <AiOutlineArrowDown /> {/* Ícone de seta para baixo */}
        </button>
      )}
      </div>
      <div className="conteudo-principal">{renderPagina()}</div>
    </div>
  );
};

export default App;
