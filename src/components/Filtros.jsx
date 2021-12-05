import React, { useState } from 'react'

export const Filtros = ({ filtros, setFiltros }) => {


    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filtrar gasto</label>
                    <select
                        value={ filtros }
                        onChange={ (e) => setFiltros(e.target.value) }
                    >
                        <option value="">-- Seleccione</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Subscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
