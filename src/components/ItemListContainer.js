import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Carrito } from './Carrito'
import { db } from './firebase'
import { collection, doc, getDocs } from 'firebase/firestore'
import { products } from './MockProductos'
import { useSelector } from 'react-redux'

const ItemListContainer = (props) => {
    // HOOKS
    const resultado = useParams()
    console.log(resultado)
    const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([])
    
    const todoRedux = useSelector(store => store)
    console.log(todoRedux)

    // EFFECTS
    useEffect(() => {
        console.log(carrito)
    }, [carrito])

    useEffect(() => {
        // Notificacion al iniciar pantalla
        toast.info("Trayendo Productos", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });

        // Defino la colecion de documentos que quiero obtener
        const productosCollection = collection(db, "paneles")

        // Obtengo los documentos
        getDocs(productosCollection)
            .then(resultado => {
                // En caso de que obtenga los datos y la notificacion aun este activa, la cierro
                toast.dismiss()

                // Mapeo los productos
                const busquedaproductos = resultado.docs.map((doc) => {
                    return doc.data()
                })
    
                // Una vez mapeado, lo seteo en el estado
                setProductos(busquedaproductos)
            })
            .catch(error => {
                // En caso de error lo indico
                toast.error("Error encontrado al traer los Productos", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }, [])

    const prueba = (e, item) => {
        // ? ahora lo que queda es usar el id para rastrear entre productos el resto de la info

        setCarrito({ ...carrito, [item.nombre]: [item.precio] })
    }

    return (
        <div>

            <ul>
                <section className='classProductos'>
                    {productos.map((item) => {
                        return <li key={item.id}>
                            <div className='centrado'>
                                <h1 className='paneles'>{item.nombre}</h1>
                                <p className='paneles' >$ {item.precio}</p>
                                <p className='paneles'>Paneles en Stock: {item.stock}</p>
                                <button class="" type="button">
                                    <Link className='negroCabron' to={`productos/${item.id}`}  >Detalles </Link>
                                </button>
                                <button onClick={(e) => prueba(e, item)}> Agregar al Carrito  </button>
                            </div>
                        </li>

                    })}
                </section>
            </ul>

        </div>
    )
}

// ul return

/*
<ul>
          <section className='classProductos'>
            {productos.map((item)=>{
                 return <li key={item.id}>
                            <h1 className='paneles' id='centrado1'>{item.nombre}</h1>
                            <p className='paneles' id='centrado1'>$ {item.precio}</p>
                            <p>Paneles en Stock: {item.stock}</p>
                             <button class="" type="button"> 
                            <Link className='negroCabron' to= {`productos/${item.nombre.toLowerCase()}`}  >Detalles </Link>
                             </button>
                            <button onClick={(e)=>prueba(e,item)}> Agregar al Carrito  </button>
                        </li>
                        
            })}
            </section>
        </ul>
*/

export default ItemListContainer