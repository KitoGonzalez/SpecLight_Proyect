import React from 'react'
import { useSelector } from 'react-redux'

export const Carrito = () => {

  const store = useSelector(store => store)
  
  return (
    <div>Tu Carrito Actual: {store.Carrito} </div>
  )
}
