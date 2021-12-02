import React, { createContext, useState } from 'react'

export const PresupuestoContext = createContext();

export const PresupuestoContextProvider = ({children}) => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

    return (
        <PresupuestoContext.Provider
            value={{
                presupuesto,
                setPresupuesto,
                isValidPresupuesto,
                setIsValidPresupuesto
            }}
        >
            { children }
        </PresupuestoContext.Provider>
    )
}
