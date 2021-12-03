import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoEntretenimiento from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSubscripciones from "../img/icono_suscripciones.svg";

export const iconoGasto = ( categoriaGasto ) => {
    switch (categoriaGasto) {
        case "ahorro":
            return IconoAhorro;

        case "casa":
            return IconoCasa;

        case "comida":
            return IconoComida;

        case "gastos":
            return IconoGastos;

        case "entretenimiento":
            return IconoEntretenimiento;

        case "salud":
            return IconoSalud;

        case "subscripciones":
            return IconoSubscripciones;
            
        default:
            return null
    }
}