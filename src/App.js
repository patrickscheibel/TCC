import React, { useState } from 'react';
import Filtro from './components/Filtro';
import getPageFromFilters from './components/getPageFromFilters';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'; // Importe o ícone de seta para baixo
import options1 from './components/options1';
import optionsPage from './components/optionsPage';
import './App.css';

const App = () => {
  const [filtro1, setFiltro1] = useState('');
  const [filtro2, setFiltro2] = useState('');
  const [filtro3, setFiltro3] = useState('');
  const [filtro4, setFiltro4] = useState('');
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
            <label>Filtro 1</label>
            <Filtro
              options={options1}
              selectedValue={filtro1}
              onSelectChange={handleSelect1Change}
            />
            <label>Filtro 2</label>
            <Filtro
              options={options1}
              selectedValue={filtro2}
              onSelectChange={handleSelect2Change}
            />
            <label>Filtro 3</label>
            <Filtro
              options={options1}
              selectedValue={filtro3}
              onSelectChange={handleSelect3Change}
            />
            <label>Tela Exibida</label>
            <Filtro
              options={optionsPage}
              selectedValue={filtro4}
              onSelectChange={handleSelect4Change}
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
