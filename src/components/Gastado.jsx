import React, { useContext, useState } from 'react';
import { PresupuestoContext } from '../context/PresupuestoContext';
import IconoNuevoGasto from "../img/nuevo-gasto.svg";
import { Modal } from './Modal';

export const Gastado = () => {

    const { isValidPresupuesto } = useContext( PresupuestoContext );
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);

    if(!isValidPresupuesto) return null;

    const handleNuevoGasto = () => {
        setModal(true);
        setTimeout(() => {
            setAnimarModal(true);
        }, 300);
    }

    return (
        <>
            <div className="nuevo-gasto">
                <img 
                    src={ IconoNuevoGasto }
                    alt="icono nuevo gasto"
                    onClick={ handleNuevoGasto }
                />
            </div>
            {   
                modal 
                ?   <Modal setModal={ setModal } animarModal={ animarModal } setAnimarModal={ setAnimarModal }/>
                :   null
            }
        </>
    )
}
