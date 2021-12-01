import React, { useContext, useState } from 'react'
import { PresupuestoContext } from '../context/PresupuestoContext'
import { Mensaje } from './Mensaje'

export const NuevoPresupuesto = () => {
    const { presupuesto, setPresupuesto } = useContext(PresupuestoContext)
    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(presupuesto === "" || presupuesto <= 0 || isNaN(Number(presupuesto)) ){
            setMensaje("coloque un presupuesto válido")
        }else{
            console.log("Si es un presupuesto válido")
        }

    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form 
                className="formulario"
                onSubmit={ handlePresupuesto }    
            >
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="text"
                        placeholder="Añade un presupuesto"
                        value={ presupuesto }
                        onChange={ e => setPresupuesto(e.target.value) }
                    />
                    <input
                        type="submit"
                        value="añadir"
                    />

                </div>
                { mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje>}
            </form>
        </div>
    )
}
