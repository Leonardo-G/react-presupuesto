import React, { createContext, useState } from 'react'

export const PresupuestoContext = createContext();

export const PresupuestoContextProvider = ({children}) => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
    const [gasto, setGasto] = useState([]);


    return (
        <PresupuestoContext.Provider
            value={{
                presupuesto,
                setPresupuesto,
                isValidPresupuesto,
                setIsValidPresupuesto,
                setGasto
            }}
        >
            { children }
        </PresupuestoContext.Provider>
    )
}
