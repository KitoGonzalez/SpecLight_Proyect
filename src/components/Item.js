import React from 'react'
import {products} from "./MockProductos"

const Item = () => {
  return (
    <>{products &&
        products.map((item)=>{
            return(<>
            {item.nombre}
            {item.precio}
            {item.stock}
            </>)
        })
    }
    </>
    )
}

export default Item