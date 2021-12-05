import React, { createContext, useEffect, useState } from 'react'

export const PresupuestoContext = createContext();

export const PresupuestoContextProvider = ({children}) => {

    const getLocalStorage = JSON.parse(localStorage.getItem("gastos-app")) || [];
    const getPresupuesto = localStorage.getItem("presupuesto") || 0;
    const getValidPresupuesto = JSON.parse(localStorage.getItem("isValidPresupuesto")) || false;

    const [presupuesto, setPresupuesto] = useState(getPresupuesto);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(getValidPresupuesto)
    const [gastos, setGastos] = useState(getLocalStorage);

    useEffect(() => {
        
        localStorage.setItem("presupuesto", presupuesto)
        localStorage.setItem("gastos-app", JSON.stringify(gastos));
        localStorage.setItem("isValidPresupuesto", JSON.stringify(isValidPresupuesto));
    }, [gastos, presupuesto, isValidPresupuesto])

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
