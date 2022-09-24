// Importamos la libreria react 
import React from 'react'

// Importamos la libreria react-dom que nos permitira manipular el Document Object Model
import ReactDOM from 'react-dom/client'

// Crearemos una constante que obtenga el elemento con id 'root' del archivo .html y que lo guarde como el elemento Root del proyecto.
const root = ReactDOM.createRoot(document.getElementById('root'))

// Luego, usaremos un método de React llamado .render() que 'renderiza' en la página un componente
root.render(<h1> Hola Mundo </h1>)

// Una vez guardamos el proyecto, vemos que nuestra pagina renderiza lo que hay dentro del <div id='root'></div> que es el <h1> Hola Mundo </h1>