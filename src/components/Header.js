import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className='centrado'>SpecLight </h1>
      </Link>
        <span class="material-icons">
        search
        home
        </span>
        
    </header>
  )
}

export default Header