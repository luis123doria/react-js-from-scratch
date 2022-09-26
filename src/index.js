// Importamos la libreria react y los Hooks useState y useEffect
import React, { useState, useEffect } from "react";
// Importamos la libreria react-dom que nos permitira manipular el Document Object Model
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

// Crearemos una constante que obtenga el elemento con id 'root' del archivo .html y que lo guarde como el elemento Root del proyecto.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Contador con Hook useState() y useEffect()
function Counter() {
  // El primer elemento que creamos es la variable que modificaremos, y el 2do elemento es la funcion que actualiza la constante.
  // Luego, el useState() toma como parametro el valor inicial de la variable a modificar
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  // Tenemos el Hook useEffect() que mostrara en consola el mensaje cada que este Componente se actualice, es decir, cada que escribamos un caracter en el input.
  useEffect(() => {
    console.log("Rendering");
  }, [counter]); // Se ejecuta solo con la actulizacion de counter

  return (
    <div>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(`El mensaje es ${mensaje}`)}> Save </button>

      <hr />

      <h1> Counter: {counter}</h1>
      <button onClick={() => {
        setCounter( counter + 1)
      }}>Incrementar</button>
    </div>
  );
}

// Luego, usaremos un método de React llamado .render() que 'renderiza' en la página un componente
root.render(
  <>
    <Counter />
  </> // Fragment
);

// Una vez guardamos el proyecto, vemos que nuestra pagina renderiza lo que hay dentro del <div id='root'></div> que es el <h1> Hola Mundo </h1>
