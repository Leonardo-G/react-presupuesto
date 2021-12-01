import React, { useContext } from 'react'
import { PresupuestoContext } from '../context/PresupuestoContext'

export const NuevoPresupuesto = () => {

    const { presupuesto } = useContext(PresupuestoContext)

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="text"
                        placeholder="Añade un presupuesto"
                        value={ presupuesto }
                    />
                    <input
                        type="submit"
                        value="añadir"
                    />

                </div>
            </form>
        </div>
    )
}
