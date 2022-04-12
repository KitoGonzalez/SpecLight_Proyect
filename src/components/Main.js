import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Carrito } from './Carrito'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
const Main = (props) => {
    console.log(props.persona.nombre)
    console.log(props.persona.rol)
  
  return (
    <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          {/* <Route path='/productos/panel300w' element={<ItemDetailContainer/>}/> */}
          {/* <Route path='/productos/panel400w' element={<ItemDetailContainer/>}/> */}
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
    </main>
  )
}

export default Main