import React, { useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PresupuestoContext } from '../context/PresupuestoContext'

export const ControlPresupuesto = () => {

    const { presupuesto, gastos } = useContext( PresupuestoContext );
    const [disponible, setDisponible] = useState( 0 );
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0 );
        const totalDisponible = presupuesto - totalGastado;

        //Calcular el procentaje
        const porcentajeNuevo = ( (presupuesto - totalGastado) / (presupuesto / 100) ) 
        
        setDisponible(totalDisponible);
        setGastado(totalGastado);
        
        setTimeout(() => {
            
            setPorcentaje(porcentajeNuevo.toFixed(2));
        }, 700);
    }, [ gastos ])

    const formatearCantidad = ( cantidad ) => {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: "#3b82f6",
                        trailColor: "#F5F5F5",
                        pathTransitionDuration: 0.8,
                    })}
                    text={`${porcentaje} % Disp.`}
                    value={porcentaje}
                />
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> { formatearCantidad(presupuesto) }
                </p>
                <p>
                    <span>Disponible: </span> { formatearCantidad(disponible) }
                </p>
                <p>
                    <span>Gastado: </span> { formatearCantidad(gastado) }
                </p>
            </div>
        </div>
    )
}
