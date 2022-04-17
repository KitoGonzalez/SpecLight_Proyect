import { CHANGE_CARRITO_PROPS, AGREGAR_UNO_AL_CARRITO, ELIMINAR_DEL_CARRITO } from "../constants/Actions"

export function agregarItem(id = 0, cantidadSolicitada = 0, nombre, precio) {
    // ESTO SE EJECUTA DENTRO DEL REDUCER
    return {
        type: AGREGAR_UNO_AL_CARRITO,
        props: {
            id: id,
            cantidadSolicitada: cantidadSolicitada,
            nombre: nombre,
            precio: precio
        }
    }
}

export function eliminarItem(id) {
    // ESTO SE EJECUTA DENTRO DEL REDUCER
    return {
        type: ELIMINAR_DEL_CARRITO,
        id: id
    }
}