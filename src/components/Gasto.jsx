import React from 'react';
import { iconoGasto } from '../helpers';

export const Gasto = ({ id, categoria, nombre, cantidad, fecha }) => {
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={ iconoGasto(categoria) } alt={ `icono ${categoria}` }/>
                <div className="descripcion-gasto">
                    <p className="categoria">{ categoria }</p>
                    <p className="nombre-gasto">{ nombre }</p>
                    <p className="fecha-gasto">Agregado el: { fecha }</p>
                </div>
            </div>
            <p className="cantidad-gasto">$ { cantidad }</p>
        </div>
    )
}
