import React, { useState } from 'react';
import Filtro from './components/Filtro';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';

const App = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState('');

  const handleSelectChange = (filtro) => {
    setFiltroSelecionado(filtro);
  };

  const renderPagina = () => {
    // eslint-disable-next-line
    switch (filtroSelecionado) {
      case 'pagina1':
        return <Pagina1 />;
      case 'pagina2':
        return <Pagina2 />;
      case 'pagina3':
        return <Pagina3 />;
      
    }
  };

  return (
    <div className="app-container">
      <Filtro onSelectChange={handleSelectChange} />
      <div className="conteudo-principal">{renderPagina()}</div>
    </div>
  );
};

export default App;
