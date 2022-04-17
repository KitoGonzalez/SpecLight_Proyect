import { CHANGE_CARRITO_PROPS, AGREGAR_UNO_AL_CARRITO, ELIMINAR_DEL_CARRITO } from "../constants/Actions";

// [
//     {
//         idProducto: ,
//         cantidadSolicitada: 1 
//     },
//     {
//         idProducto: ,
//         cantidadSolicitada: 2
//     },
//     {
//         idProducto: ,
//         cantidadSolicitada: 10 
//     }
// ]

const initialState = {
    items: [

    ],
    variable: 0
}

export default function carritoReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CARRITO_PROPS:
            return { ...state, ...action.props };
        case AGREGAR_UNO_AL_CARRITO:
            // DESESTRUCTURAR LOS ARREGLOS CUANDO LOS HAYA
            const items = [...state.items]

            // Busco si existe el item ya
            const encontrado = items.findIndex(item => item.id === action.props.id)

            // si esta encontrado le sumo uno
            if (encontrado >= 0) {
                items[encontrado].cantidadSolicitada++
            } else {
                items.push(action.props)
            }


            return { ...state, items: items  }
        case ELIMINAR_DEL_CARRITO:
            const itemsAFiltrar = [...state.items]

            // UTILIZO LA FUNCION filter de los arrays
            const filtrados = itemsAFiltrar.filter((item) => item.id !== action.id)
            // AQUI OBTENGO TODOS LOS ITEMS DISTINTOS AL QUE QUIERO BORRAR EN UN ARREGLO NUEVO

            return { ...state, items: filtrados }
        default:
            return state;
    }
}