import React from 'react'
import { useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { db } from './firebase'
import { producto1, products } from './MockProductos'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { agregarItem } from "../actions/carritoActions"

const ItemDetailContainer = (props) => {
    // Hooks ------------------------------------
    const params = useParams();

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [estado, setEstado] = useState(0)

    const dispatcher = useDispatch();

    // OBTENCION DE DATOS DE REDUCER DE EJEMPLO ********************************************
    // EJEMPLO ILUSTRATIVO DE COMO OBTENER TODO EL ESTADO DE REDUX
    const store = useSelector(store => store)
    // EJEMPLO DE COMO OBTENER UN REDUCER EN PARTICULAR CON EL OPERADOR
    const carrito = useSelector(store => store.carrito)
    // EJEMPLO DE COMO OBTENER UN ESTADO DENTRO DE UN REDUCER CON DESESTRUCTURACION
    const { items } = useSelector(store => store.carrito)
    
    console.group("PRUEBA-REDUCER")
    console.log(store)
    console.log(carrito)
    console.log(items)
    console.groupEnd("PRUEBA-REDUCER")
    // FINFIN OBTENCION DE DATOS DE REDUCER DE EJEMPLO *************************************

    // HOOKS FIN --------------------------------

    useEffect(() => {
        // Esto es lo mismo que
        // const id = params.id
        const { id } = params

        const docRef = doc(db, "paneles", id);

        getDoc(docRef)
            .then(resultado => {
                return resultado.data()
            })
            .then(producto => {
                setProducto(producto)
            })
            .catch(error => {
                console.log(error)
            })

        
    }, [])

    useEffect(() => {
        console.log(productos)
        if (productos) {
            const productoElegido = productos.filter(elegido => {
                return elegido.nombre === "Panel200W"
            })
            setProducto(productoElegido)
        }
    }, [productos])

    const agregarCarrito = () => {
        // Primero deberia comprobar si hay stock, en caso de que lo haya se lo puede agregar al item
        if (producto && producto.stock && producto.stock > 0) {
           
            // Luego verificar si ya se lo agrego al carrito
            // En caso de que si deberiamos sumarle uno mas
            // En caso de que no, lo agregamos directamente
            dispatcher(agregarItem(producto.id, 1, producto.nombre, producto.precio))
        }
    }



    return (
        <div className='centrado'>
            <h1 className='paneles'>Detalles de {producto.nombre}</h1>
            <p className='paneles' >Tu {producto.nombre} cuenta con {producto.leds} LEDS FullSpectrum de la mas ALTA Calidad</p>
            <p className='paneles'>El Panel Tiene un valor de $ {producto.precio}</p>


            <br />
            <p className='paneles'>Stock Disponible ¡10!</p>
            <button className='btn btn-dark' onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetailContainer