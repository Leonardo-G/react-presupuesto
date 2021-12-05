import React from 'react'
import { Gasto } from './Gasto'

export const ListadoGastos = ({ filtrosArray, setEditarGasto, eliminarGasto }) => {
    return (
        <div className="listado-gastos contenedor">
           <h2>{filtrosArray.length ? "Gastos" : "No hay Gastos aún"}</h2> 
        
            {
                filtrosArray.map( gasto => (
                    <Gasto key={ gasto.id } setEditarGasto={ setEditarGasto } eliminarGasto={ eliminarGasto } { ...gasto } />
                ))
            }
        </div>
    )
}
