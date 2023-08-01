import React, { useState } from 'react';
import './Filtro.css';

const Filtro = ({ onSelectChange }) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState('');
  const [filtroPosicao, setFiltroPosicao] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [filtroVisivel, setFiltroVisivel] = useState(true);
  const filtroRef = React.createRef();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setFiltroSelecionado(value);
    onSelectChange(value);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const filtroWidth = filtroRef.current.offsetWidth;
      const filtroHeight = filtroRef.current.offsetHeight;
      const offsetX = filtroWidth / 2;
      const offsetY = filtroHeight / 2;

      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;

      setFiltroPosicao({ x, y });
    }
  };

  const toggleFiltro = () => {
    setFiltroVisivel((prev) => !prev);
  };

  return (
    <div
      ref={filtroRef}
      className={`filtro-container ${filtroVisivel ? '' : 'filtro-oculto'}`}
      style={{ left: filtroPosicao.x, top: filtroPosicao.y }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {filtroVisivel && (
        <div>
          <select value={filtroSelecionado} onChange={handleSelectChange}>
            <option value="">Selecione um filtro...</option>
            <option value="pagina1">Filtro da Página 1</option>
            <option value="pagina2">Filtro da Página 2</option>
            <option value="pagina3">Filtro da Página 3</option>
          </select>
          <button onClick={toggleFiltro}>Ocultar Filtro</button>
        </div>
      )}
      {!filtroVisivel && (
        <button className="mostrar-filtro-btn" onClick={toggleFiltro}>
          Mostrar Filtro
        </button>
      )}
    </div>
  );
};

export default Filtro;