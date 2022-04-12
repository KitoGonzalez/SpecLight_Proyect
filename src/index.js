//1 Necesitamos la variable React en Scope
import React from "react";

//2 Necesitamos la variable ReactDom en Scope
import ReactDOM from "react-dom";
//3 Necesitamos un componente en Scope
import App from "./App"
import "./estilos.css"

//4 Necesitamos poner el componente en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))