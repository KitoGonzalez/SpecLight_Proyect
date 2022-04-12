// SIRVE PARA COMBINAR REDUCERS
import { combineReducers } from "redux";

// IMPORTAMOS TODOS LOS REDUCERS
import carritoReducer from "./carritoReducer";
import otroReducer from "./otroReducer";

// Combinamos todos los estados de redux
const rootReducer = combineReducers({
    carrito: carritoReducer,
    
})

// Exportamos el reducer general, aqui estan todas las props del estado global de redux
export default rootReducer