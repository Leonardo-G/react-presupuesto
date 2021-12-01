import React, { createContext, useState } from 'react'

export const PresupuestoContext = createContext();

export const PresupuestoContextProvider = ({children}) => {

    const [presupuesto, setPresupuesto] = useState(0)

    return (
        <PresupuestoContext.Provider
            value={{
                presupuesto,
                setPresupuesto
            }}
        >
            { children }
        </PresupuestoContext.Provider>
    )
}
