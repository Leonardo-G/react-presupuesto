import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PresupuestoContext } from '../context/PresupuestoContext';
import CerrarBtn from "../img/cerrar.svg";
import { Mensaje } from './Mensaje';

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const { setGastos } = useContext( PresupuestoContext )
    const [mensaje, setMensaje] = useState("");
    const [camposFormulario, setCamposFormulario] = useState({
        nombre: "",
        cantidad: "",
        categoria: ""
    })
    const { nombre, cantidad, categoria } = camposFormulario;

    const handleCerrarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            
            setModal(false);
        }, 300);
    }

    const handleChangeInputs = (e) => {
        setCamposFormulario({
            ...camposFormulario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, cantidad, categoria].some(input => input === "")){
            setMensaje("Todos los campos son obligatorios")
            return;
        }
        setMensaje("");

        //Guarda el nuevo gasto
        setGastos(gastos => [
            ...gastos,
            {
                id: uuidv4(),
                fecha: new Date().toLocaleString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                }),
                nombre,
                cantidad,
                categoria
            }
        ]);

        //Desactivar modal
        setAnimarModal(false);

        setTimeout(() => {
            
            setModal(false);
        }, 300);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={ CerrarBtn } 
                    alt="icono cerrar modal"
                    onClick={ handleCerrarModal }
                />
            </div>
            <form 
                className={`formulario ${ animarModal ? "animar" : "cerrar"}`}
                onSubmit={ handleSubmit }    
            >
                <legend>Nuevo Gasto</legend>
                {
                    mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje>
                }
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id="nombre"
                        type="text"
                        name="nombre"
                        placeholder="Añadee el Nombre del Gasto"
                        value={ nombre }
                        onChange={ handleChangeInputs }
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id="cantidad"
                        name="cantidad"
                        type="number"
                        placeholder="Añade la Cantidad de Gasto: Ej 300"
                        value={ cantidad }
                        onChange={ handleChangeInputs }
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={ categoria }
                        onChange={ handleChangeInputs }
                    >
                        <option value="">-- Seleccione</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Subscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    defaultValue="Añadir Gasto"
                />
            </form>
        </div>
    )
}
