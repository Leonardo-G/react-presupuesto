import React, { useContext, useState } from 'react';
import { PresupuestoContext } from '../context/PresupuestoContext';
import IconoNuevoGasto from "../img/nuevo-gasto.svg";
import { Modal } from './Modal';

export const Gastado = () => {

    const { isValidPresupuesto } = useContext( PresupuestoContext );
    const [modal, setModal] = useState(false);

    const handleNuevoGasto = () => {
        console.log("diste clickc");
        setModal(true)
    }

    return (
        <>
            {
                isValidPresupuesto &&
                <div className="nuevo-gasto">
                    <img 
                        src={ IconoNuevoGasto }
                        alt="icono nuevo gasto"
                        onClick={ handleNuevoGasto }
                    />
                </div>
            }
            {
                isValidPresupuesto & modal 
                ?   <Modal />
                :   null
            }
        </>
    )
}
