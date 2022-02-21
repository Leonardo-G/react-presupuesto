import React, { useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PresupuestoContext } from '../context/PresupuestoContext'

export const ControlPresupuesto = () => {

    const { presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto } = useContext( PresupuestoContext );
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

    const handleResetApp = () => {
        const resultado = confirm("Deseas reiniciar presupuesto y gastos?")

        if(resultado){
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor:  "#3b82f6",
                        trailColor: Number(porcentaje) <= 0 ? "#dc2626dc" : "#f5f5f5",
                        pathTransitionDuration: 0.8,
                        textColor: porcentaje <= 0 ? "#dc2626dc" : "#3b82f6"
                    })}
                    text={`${porcentaje} % Disp.`}
                    value={porcentaje}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={ handleResetApp }
                >Resetear App</button>
                <p>
                    <span>Presupuesto: </span> { formatearCantidad(presupuesto) }
                </p>
                <p className={ `${disponible < 0 && "negativo" }`}>
                    <span>Disponible: </span> { formatearCantidad(disponible) }
                </p>
                <p>
                    <span>Gastado: </span> { formatearCantidad(gastado) }
                </p>
            </div>
        </div>
    )
}
