import React, { useContext, useEffect, useState } from 'react';
import { PresupuestoContext } from '../context/PresupuestoContext';
import IconoNuevoGasto from "../img/nuevo-gasto.svg";
import { ListadoGastos } from './ListadoGastos';
import { Modal } from './Modal';

export const Gastado = () => {
    const { gastos } = useContext( PresupuestoContext );
    
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [editarGasto, setEditarGasto] = useState({})
    
    useEffect(() => {
        if(Object.keys(editarGasto).length > 0){
            setModal(true);
            
            setTimeout(() => {
                setAnimarModal(true);
            }, 300);
        }
    }, [ editarGasto ])
    
    const handleNuevoGasto = () => {
        setModal(true);
        setEditarGasto({})
        setTimeout(() => {
            setAnimarModal(true);
        }, 300);
    }
    

    return (
        <>
            <main>
                <ListadoGastos gastos={ gastos } setEditarGasto={ setEditarGasto }/>
            </main>
            <div className="nuevo-gasto">
                <img 
                    src={ IconoNuevoGasto }
                    alt="icono nuevo gasto"
                    onClick={ handleNuevoGasto }
                />
            </div>
            {   
                modal 
                ?   <Modal setModal={ setModal } animarModal={ animarModal } setAnimarModal={ setAnimarModal } editarGasto={ editarGasto }/>
                :   null
            }
        </>
    )
}
