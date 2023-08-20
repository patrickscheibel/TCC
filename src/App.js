import React, { useState } from 'react';
import Filtro from './components/Filtro';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import options1 from './components/options1.js';
import './App.css';

const App = () => {
  const [filtro1, setFiltro1] = useState('');
  const [filtro2, setFiltro2] = useState('');
  const [filtro3, setFiltro3] = useState('');
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

  const handleToggleFiltros = () => {
    setFiltrosVisiveis((prevFiltrosVisiveis) => !prevFiltrosVisiveis);
  };

  const renderPagina = () => {
    if(filtro1 === 'pagina1' && filtro2 === 'pagina2' && filtro3 === 'pagina3') {
      return <Pagina1 />;
    }
    // if(filtro2 === 'pagina2') {
    //   return <Pagina2 />;
    // }
    // if(filtro3 === 'pagina3') {
    //   return <Pagina3 />;
    // }
  }

  return (
    <div className="app-container">
      <div className="filtros-container">
        {filtrosVisiveis && (
          <div className="todos-filtros">
            <Filtro
              options={options1}
              selectedValue={filtro1}
              onSelectChange={handleSelect1Change}
            />
            <Filtro
              options={options1}
              selectedValue={filtro2}
              onSelectChange={handleSelect2Change}
            />
            <Filtro
              options={options1}
              selectedValue={filtro3} // Passar o valor selecionado
              onSelectChange={handleSelect3Change}
            />
            <button className="toggle-filtros-btn" onClick={handleToggleFiltros}>Ocultar Filtro</button>
          </div>
        )}
        {!filtrosVisiveis && (
        <button className="mostrar-filtro-btn" onClick={handleToggleFiltros}>
          Mostrar Filtro
        </button>
      )}
      </div>
      <div className="conteudo-principal">{renderPagina()}</div>
    </div>
  );
};

export default App;
