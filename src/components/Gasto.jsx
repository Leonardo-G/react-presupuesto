import React, { useContext } from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import 'react-swipeable-list/dist/styles.css';
import { PresupuestoContext } from '../context/PresupuestoContext';
import { iconoGasto } from '../helpers';

export const Gasto = ({ setEditarGasto, eliminarGasto, ...gasto }) => {
    const { id, categoria, nombre, cantidad, fecha } = gasto

    const leadingActions = () => {
        return <LeadingActions>
                    <SwipeAction onClick={() => setEditarGasto(gasto)}>
                        Editar
                    </SwipeAction>
               </LeadingActions>
    }

    const trailingActions = () => {
        return <TrailingActions>
                    <SwipeAction 
                        onClick={() => eliminarGasto(id)}
                        destructive={true}    
                    >
                        Eliminar
                    </SwipeAction>
               </TrailingActions>
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={ leadingActions() }
                trailingActions={ trailingActions() }
            >
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
            </SwipeableListItem>
        </SwipeableList>
    )
}
