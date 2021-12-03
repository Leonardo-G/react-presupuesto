import React, { useContext } from 'react'
import { PresupuestoContext } from '../context/PresupuestoContext'
import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = () => {

    const { isValidPresupuesto, gastos } = useContext( PresupuestoContext );


    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {
                isValidPresupuesto

                ? <ControlPresupuesto />

                : <NuevoPresupuesto />
            }
        </header>
    )
}
