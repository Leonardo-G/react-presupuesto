import React, { createContext, useEffect, useState } from 'react'

export const PresupuestoContext = createContext();

export const PresupuestoContextProvider = ({children}) => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
    const [gastos, setGastos] = useState([]);

    return (
        <PresupuestoContext.Provider
            value={{
                presupuesto,
                setPresupuesto,
                isValidPresupuesto,
                setIsValidPresupuesto,
                gastos,
                setGastos,
            }}
        >
            { children }
        </PresupuestoContext.Provider>
    )
}
