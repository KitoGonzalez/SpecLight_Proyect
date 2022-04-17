import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { agregarItem, eliminarItem } from "../actions/carritoActions"

export const Carrito = () => {
  const dispatcher = useDispatch();

  // Como puedo obtener el carrito
  // Aquio traemos todo el estado global del redux
  // Practica no recomendad
  const store = useSelector(store => store)

  // Obtenemos el carrito del estado global de redux
  // y lo asignamos a la variable carrito1
  // 'store.carrito' carrito es el nombre que le asignamos
  // en el combine reducer
  const carrito1 = useSelector(store => store.carrito)

  // obtener los items de otra forma, en este caso usando el deconstructuring
  // el ejemplo es lo mismo que decir
  // const items = useSelector(store => store.carrito.items)
  const { items } = useSelector(store => store.carrito)

  // TOTAL DEL CARRITO
  let total = 0;

  function agregarCarrito(id, nombre, precio) {
    dispatcher(agregarItem(id, 1, nombre, precio))
  }

  function eliminarDelCarrito(idABorrar) {
    dispatcher(eliminarItem(idABorrar))
  }

  console.log("ITEMS", items)
  return (
    <div>
      <h2 className='paneles'>Tu Carrito🛒</h2>
      <section className='classProductos'>

      {
        items.length === 0
          ? (
            <div>
              <p>Tu carrito esta vacio!</p>
            </div>
          ) 
          : (
            <div className='classProductos'>
            { 
              items.map((item, id) => {
                let subTotal = item.precio * item.cantidadSolicitada
                total = total + subTotal
                // total +=

                return (
                  <section className=''>
                <div key={id}>
                  <h5 className='paneles'>{item.nombre}</h5>
                  <p>Cantidad solicitada: {item.cantidadSolicitada}</p>
                  <p>Precio Lista: $ {parseFloat(item.precio).toFixed(2)}</p>
                  <p>Sub Total: $ {parseFloat(subTotal).toFixed(2)}</p>
                  <div>
                    <button className='btn btn-dark' onClick={() => agregarCarrito(item.id, item.nombre, item.precio)}>Agregar un Panel más</button>
                    <button className='btn btn-dark' onClick={() => eliminarDelCarrito(item.id)}>Eliminar del carrito🗑️</button>
                  </div>
                  <hr/>
                </div>  </section>              
                )
                }
              )
            }
              <p className='paneles'>El total de tu carrito es $ {total}</p>
            </div>
          )
      }</section>
    </div>
  )
}
