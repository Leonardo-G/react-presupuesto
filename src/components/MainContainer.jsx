import React, { useContext, useState } from 'react'
import { PresupuestoContext } from '../context/PresupuestoContext'
import { Gastado } from './Gastado'
import { Header } from './Header'

export const MainContainer = () => {

    const { isValidPresupuesto } = useContext( PresupuestoContext )
    
    return (
        <>
            <Header />
            {
                isValidPresupuesto &&
                <Gastado />   
            }
        </>
    )
}
