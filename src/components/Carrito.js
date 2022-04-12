import React from 'react'
import { useParams } from 'react-router-dom'

export const Carrito = () => {

    const resultado2 = useParams()
  console.log(resultado2)
  
  return (
    <div>Tu Carrito Actual: {resultado2} </div>
  )
}
