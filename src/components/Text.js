import React from 'react'
import Docientos from "../assets/img/200w.png"
import Trecientos from "../assets/img/300w.png"
import Cuatrocientos from "../assets/img/400w.png"

const Text = () => {
  return (
    <div>
    <h1 className='centrado2'>Profesionaliza Tu Cultivo</h1>
    <div className="d-flex justify-content-evenly">
    <h3 className='centrado2' >¿Por Qué Elegir SpecLight?</h3>
  </div>
  <div className="d-flex justify-content-around">
    <p className='centrado2'>Trabajamos con LEDS de potencia de 50W. Consiguiendo de esta manera un panel mucho mas eficiente y economico que cualquier luz de Sodio .</p>
  </div>
  <div className="card-group">
        <div className="card">
          <img src={Docientos} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className="d-flex justify-content-center">
            <h5 className="card-title">Panel FullSpectrum 200W</h5></div>
            <div className="d-flex justify-content-center">
              <p className="card-text">Nuestro Panel LED COB FullSpectrum de 200W</p> </div><div className="d-flex justify-content-center"><p className="card-text">¡Envio Gratis!</p></div>
              <div className="d-flex justify-content-center">
            <p className="card-text"></p>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={Trecientos} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className="d-flex justify-content-center">
            <h5 className="card-title">Panel FullSpectrum 300W</h5></div>
            <div className="d-flex justify-content-center">
              <p className="card-text">Nuestro Panel LED COB FullSpectrum de 300W</p></div> <div className="d-flex justify-content-center"><p className="card-text">¡Envio Gratis!</p></div>
              <div className="d-flex justify-content-center">
            <p className="card-text"></p>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={Cuatrocientos} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className="d-flex justify-content-center">
            <h5 className="card-title">Panel FullSpectrum 400W</h5></div>
            <div className="d-flex justify-content-center">
              <p className="card-text">Nuestro Panel LED COB FullSpectrum de 400W</p></div><div className="d-flex justify-content-center"><p className="card-text">¡Envio Gratis!</p></div>
              <div className="d-flex justify-content-center">
            <p className="card-text"> </p>
          </div>
          </div>
        </div>
      </div>

    </div>
    

  )
}
export default Text