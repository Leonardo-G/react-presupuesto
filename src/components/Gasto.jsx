import React from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import 'react-swipeable-list/dist/styles.css';
import { iconoGasto } from '../helpers';

export const Gasto = ({ id, categoria, nombre, cantidad, fecha }) => {

    const leadingActions = () => {
        return <LeadingActions>
                    <SwipeAction onClick={() => console.log("Editar..")}>
                        Editar
                    </SwipeAction>
               </LeadingActions>
    }

    const trailingActions = () => {
        return <TrailingActions>
                    <SwipeAction onClick={() => console.log("eliminar")}>
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
