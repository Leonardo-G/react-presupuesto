import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PresupuestoContext } from '../context/PresupuestoContext';
import CerrarBtn from "../img/cerrar.svg";
import { Mensaje } from './Mensaje';

export const Modal = ({ setModal, animarModal, setAnimarModal, editarGasto }) => {

    const { gastos, setGastos } = useContext( PresupuestoContext )
    const [mensaje, setMensaje] = useState("");
    const [camposFormulario, setCamposFormulario] = useState({
        nombre: "",
        cantidad: "",
        categoria: ""
    })
    const { nombre, cantidad, categoria } = camposFormulario;
    const [id, setId] = useState("")

    useEffect(() => {
        if(Object.keys(editarGasto).length > 0){
            setCamposFormulario({
                nombre: editarGasto.nombre,
                cantidad: editarGasto.cantidad,
                categoria: editarGasto.categoria
            })
            setId(editarGasto.id)
        }
    }, [])

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

        const objGasto = {
            fecha: new Date().toLocaleString("es-ES", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }),
            nombre,
            cantidad,
            categoria
        }

        //Comprobar si ya existe un gasto
        const isExistGasto = gastos.some(gasto => gasto.id === id);
        
        if(isExistGasto){
            // Actualizar gasto        
            const gastoActualizar = gastos.filter(gasto => gasto.id !== id);
            setGastos([
                ...gastoActualizar, 
                { id,...objGasto }
            ])
        }else{
            //Guarda el nuevo gasto
            setGastos(gastos => [
                ...gastos,
                {...objGasto, id: uuidv4()}
            ]);
        }
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
                <legend>{ editarGasto.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
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
                    value={ editarGasto.nombre ? "Editar Gasto" : "Añadir Gasto" }
                />
            </form>
        </div>
    )
}
