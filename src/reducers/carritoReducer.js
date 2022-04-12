import { CHANGE_CARRITO_PROPS, AGREGAR_UNO_AL_CARRITO } from "../constants/Actions";

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
        default:
            return state;
    }
}