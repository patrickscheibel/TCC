import React, { useState, useEffect } from 'react'

const Filtro = ({ options, onSelectChange, selectedValue, selectedDefault }) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState(selectedValue)

  useEffect(() => {
    setFiltroSelecionado(selectedValue)
  }, [selectedValue])

  const handleSelectChange = (event) => {
    const value = event.target.value
    setFiltroSelecionado(value)
    onSelectChange(value)
  }

  return (
    <select value={filtroSelecionado} onChange={handleSelectChange}>
      {selectedDefault === 0 ? (
        <option value="" disabled>
          Selecione
        </option>
      ) : ''}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Filtro
