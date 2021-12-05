import React from 'react'
import { Gasto } from './Gasto'

export const ListadoGastos = ({ gastos, setEditarGasto, eliminarGasto }) => {
    return (
        <div className="listado-gastos contenedor">
           <h2>{gastos.length ? "Gastos" : "No hay Gastos aún"}</h2> 
        
            {
                gastos.map( gasto => (
                    <Gasto key={ gasto.id } setEditarGasto={ setEditarGasto } eliminarGasto={ eliminarGasto } { ...gasto } />
                ))
            }
        </div>
    )
}
