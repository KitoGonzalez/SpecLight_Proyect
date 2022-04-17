import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
export const NavBar = () => {
  return (
    <nav>
        
        <Link to="/">Productos </Link>
        <Link to="carrito">Tu Carrito <CartWidget/>  
        </Link> 
    </nav>
  )
}
export default NavBar