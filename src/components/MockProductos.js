import React from 'react'
export  const products =  
 [

     {
         "id":200,
        "nombre":"Panel200W",
         "precio": 18000,
        "stock":10
         
    },
    {
        "id":300,
        "nombre":"Panel300W",
         "precio": 22000,
         "stock":11  
    },
    {
        "id":400,
        "nombre":"Panel400W",
        "precio": 26000 ,
        "stock":8   
    }
 ]

 export  const producto1 =  
  {
         "id":200,
            "nombre":"Panel200W",
         "precio": 18000,
    }
export const traerProductos = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(products)
        },2000);
        // traerProductos.then((resultado)=>{
        //    console.log("Pedido Exitoso")
        //     products(resultado)
        // })
        // traerProductos.catch((error)=>{
        //    console.log("Pedido Problematico")
        // })
     });





     /*  useEffect(() =>{
        console.log("Ejecutando USE EFFECT")
        //Pido mis productos con un settimeout de 2 sec
        const pedido = new Promise ((res,rej)=>{
        setTimeout(()=>{
            res(products)
        },2000)
    })
    pedido.then((resultado)=>{
        console.log("Pedido Exitoso")
        setProductos(resultado)
    })
    pedido.catch((error)=>{
        console.log("Pedido Problematico")
    })

    },[])*/
       
