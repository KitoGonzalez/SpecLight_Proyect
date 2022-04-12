import { CHANGE_CARRITO_PROPS, AGREGAR_UNO_AL_CARRITO } from "../constants/Actions"

export function agregarItem(id = 0, cantidadSolicitada = 0) {
    return {
        type: AGREGAR_UNO_AL_CARRITO,
        props: {
            id: id,
            cantidadSolicitada: cantidadSolicitada
        }
    }
}