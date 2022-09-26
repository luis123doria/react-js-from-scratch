# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


La información presentada en este artículo ha sido extraída de [Curso de Reactjs](https://www.youtube.com/watch?v=rLoWMU4L_qE&list=RDCMUCX9NJ471o7Wie1DQe94RVIg&start_radio=1&rv=rLoWMU4L_qE&t=117&ab_channel=Fazt).

## Pre-requisitos

- [Node.js](https://nodejs.org/es/download/)
- [Visual Studio Code ](https://code.visualstudio.com/download) (O cualquier otro editor de texto)

## Crear proyecto de React 

Para crear nuestro proyecto de React podemos usar 2 métodos:

###  [`create-react-app`](https://create-react-app.dev/): Nos permite crear una aplicación de React en 1 sola linea de código. Es el más conocido.

###  [Vite.js](https://vitejs.dev/): Es más rápido que `create-react-app` y permite crear proyectos de distintos frameworks y librerías. 

Usaremos `create-react-app`. Para eso, vamos a nuestra terminal y escribimos:

``` bash
npx create-react-app react-js-course
```

Luego de unos minutos de instalación, nuestra aplicación en React será creada y podremos acceder a ella usando el comando `cd react-js-course`. Para iniciar nuestro proyecto basta con ejecutar el comando `npm start`. Se compilará nuestro proyecto y luego nos abrirá el `index.html` de nuestra app.

Una vez iniciada la app, nuestra terminal cambiará y nos mostrará el siguiente mensaje:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663815085280/MGqL6pewi.png align="left")

Nos mostrará el enlace para acceder a nuestra app de manera local y en nuestra Red. Nótese que estamos en un entorno de desarrollo, pues nos indica que podemos usar el comando `npm run build` para construir el paquete de producción, que es el que finalmente podremos subir a internet. 

React usa webpack para compilar el proyecto.

Puedes acceder al repositorio de este proyecto [aquí](https://github.com/luis123doria/react-js-from-scratch).

## Estructura del Proyecto

Una vez accedemos a la carpeta de nuestro proyecto vamos a ver unas cuantas carpetas y archivos:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663816081581/_kErC3ER1.png align="left")

### Carpeta `src`
Esta contiene todos los archivos y recursos que usaremos en nuestra aplicación.
Si vamos a `index.js` veremos que el código lo que hace es importar las bibliotecas que usa Javascript.

Vemos en esta carpeta que podemos añadir los archivos de Javascript y CSS, algo que no se hace con otros frameworks, pero sí en React.

### Carpeta `public`
En esta carpeta se encuentra el `index.html` al cual agregaremos todo el código CSS y Javascript.
Dentro de la etiqueta `<body> </body>` vamos a ver una linea muy importante; se trata de `<div id="root"> </div>`

``` html
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>      <!-- Justo aqui -->
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
```

Este divider es donde estará todo el contenido de nuestra página web. React js trabaja por componentes e interfaces, que son los que componen todo el sitio. Al final, todos estas interfaces se unirán en un archivo .html para mostrarse en la página

### Carpeta raíz `./`
En el directorio de nuestro proyecto podemos ver el archivo `package.json` el cual contiene información (nombre y versión) de los paquetes y librerías que usaremos en nuestro proyecto, así como algunos scripts como `npm start` o `npm run build`, que son alias para código más largo.

También encontramos el archivo `package-lock.json`, el cual sirve para tener un seguimiento de los paquetes que están instalados en la carpeta `node_modules`


### Carpeta `node_modules`
Esta carpeta se crea automáticamente cuando creamos un proyecto con Node.js y contiene archivos de bibliotecas y librerías.

## Hola Mundo

Vamos a escribir un sencillo Hola Mundo en nuestra aplicación en React. Para ello borraremos la carpeta `./src` y crearemos una nueva. 
Dentro de `./src` crearemos un archivo `index.js` donde importaremos 2 modulos:

``` javascript
// Importamos la libreria react 
import React from 'react'

// Importamos la libreria react-dom que nos permitira manipular el Document Object Model 
import ReactDOM from 'react-dom/client'
```

Recordemos que trabajaremos editando y manipulando el Document Object Model, es por ello que importamos la 2da libreria.

Crearemos una constante que obtenga el elemento con id 'root' del archivo `index.html` y que lo guarde como el elemento Root del proyecto:
``` javascript
const root = ReactDOM.createRoot(document.getElementById('root'))
```

Luego, usaremos un método de React llamado .render() que 'renderiza' en la página un componente:

``` javascript
root.render(<h1> Hola Mundo </h1>)
```

Una vez guardamos el proyecto, vemos que nuestra pagina renderiza lo que hay dentro del `<div id='root'></div>` que es un `<h1> Hola Mundo </h1>`.

## Componentes en React

Supongamos que queremos crear un sitio web con la siguiente estructura:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663993306220/Ct-nms20C.png align="left")

Es una estructura bastante común con un **navbar**, un **sidebar** un **main** y varios **post** dentro del **main**. Lo que nos dice React es que en una aplicación web tendremos multiples partes, entones: ¿Por qué no dividir todas estas partes? De esta forma se pueden mantener individualmente cada una de estas partes. Cada una de estas partes se conocen en React como **Componentes**. 

En ese sentido, los Components son porciones de código de una interfaz mucho más grande. Los componentes son reutilizables. 

Cuando creamos una aplicación con React, tendremos 1 componente inicial que va a contener a todos los demás componentes. Este es el componente al que React llama **Root Component**, y es el equivalente a la etiqueta `<body></body>` en HTML5, que engloba a las demás etiquetas en un archivo .html.

Más información en: [Renderizando elementos](https://es.reactjs.org/docs/rendering-elements.html)

## Creando Componentes

En la práctica, los **Components** en React son funciones que retornan porciones de código HTML, CSS y Javascript.

Creemos nuestro primer Component en React:

``` javascript
// index.js

// Creacion de un Component
function Greeting() {
    return <h1> This is a React Component</h1>

// Finalmente, renderizamos dentro del Root Component el Component Greeting()
root.render(Greeting())      // This is a React Component
}
```
Los components en React son funciones que se declaran con la primera letra en mayúscula.

Al renderizar el Root Component podemos agregar varios Components. Veamos un ejemplo:

``` javascript
// index.js
root.render(
<div>
    { Greeting() }
</div>
)      // This is a React Component
```
Podemos ejecutar código dentro de las etiquetas HTML si lo encerramos dentro de llaves {}. Pero esto no se ve bien, lo que React nos permite hacer es declarar el Component como una etiqueta HTML.

``` javascript
// index.js
root.render( 
    <Greeting/>
)      // This is a React Component
```

Esta es una manera más sencilla de renderizar un React Component. Estas etiquetas tienen algo llamado **Self Closing Tag**, que les permite cerrarse sin necesidad de una segunda etiqueta de cierre.

Más información en: [Componentes y Propiedades](https://es.reactjs.org/docs/components-and-props.html)

## JSX

JSX nos permite retornar porciones de código en HTML, que al final será convertido en código Javascript puro

JSX permite combinar código HTML y Javascript en un solo bloque de código.

``` javascript
// Creacion de un Component
function Greeting() {
  const name = 'Luisfer'
  return (
    <div>
      <h1> This is a React Component</h1>
      <p> Hello {name} </p>
    </div>
  );
}
```
En JSX si queremos ejecutar código Javascript dentro de una etiqueta HTML, usaremos unas {}.

### Operador Ternario para condicionales

El Operador Ternario es un operador que se usa bastante en React, y permite simplificar muchas líneas de código en comparación de la condicional if-else:

``` javascript
function Greeting() {
  const name = "Luisfer";
  const isAdult = false;
  return (
    <div>
      <h1> This is a React Component</h1>
      <p> Hello {name} </p>
      <p> You are {isAdult ? "adult" : "young"} </p>
    </div>
  );
}
```
Vemos que, si la constante `isAdult` es `true`, entonces la etiqueta `<p></p>` contendra **You are adult**, sino, contendra **You are young**

### El caso de los Object

Si queremos retornar un Objeto de Javascript en un Componente de React nos tirará un error ya que React no sabe como imprimir en pantalla un dato de tipo Objeto. En ese caso, usaremos una funcionalidad de Javascript: `JSON.stringify(object_name)`, que nos permite transformar un Objeto en un string que si puede leer React.

``` javascript
function Greeting() {
  const user = {
    name: "luisfer",
    gender: "male",
  };

  return <h1>{JSON.stringify(user)}</h1>;
}
```

De esta manera hemos podido imprimir un Objeto convertido en string que React reconoce.

### Etiqueta fragment `<> </>`

Nos indica que es una etiqueta, que no tiene nombre pero que es una etiqueta conocida como **Fragment**.

Más información en: [Presentando JSX](https://es.reactjs.org/docs/introducing-jsx.html)

## ECMAScript Modules

Escribir todo el código de nuestra aplicación web en un solo archivo sería algo muy difícil de mantener y actualizar con el tiempo. Es por ello que se usan los `modules` para poder importar y exportar diferentes archivos y funcionalidades de los mismos. Veamos como aplicarlo a nuestro proyecto:

``` javascript
// Greeting.js

// Creacion de un Component
export function Greeting() {
  const user = {
    name: "luisfer",
    gender: "male",
  };

  return (
    <div>
      <h1> {user.name}</h1>
      <h2> {user.gender} </h2>
    </div>
  );
}
```
Creamos un nuevo archivo en `./src` llamado `Greeting.js` que contendrá el Component. Añadimos la palabra clave `export` antes de la declaración del Component para indicarle a Javascript que exportaremos esta función y que podremos usarla en otros archivos de Javascript.

``` javascript
// index.js

import { Greeting } from "./Greeting";
```
Ahora, en nuestro `index.js` solo basta con importar el Component Greeting desde la ruta `./Greeting` (No es necesario colocar la extensión, ya que `create-react-app` se ocupa de ello)

Más información en: [¿Qué son los módulos ES?](https://lenguajejs.com/javascript/modulos/que-es-esm/#qu%C3%A9-son-los-m%C3%B3dulos-es) [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Extensión JSX

Los archivos que contengan Components y elementos de React podemos renombrarlos con la extensión `.jsx`
A partir de aquí, los archivos que contengan Components tendrán la extensión `.jsx`

## Props

De momento, en nuestro `index.js` renderizamos unas 3 veces el Component `<Greeting />`:

``` javascript
root.render(
  <>    
    <Greeting />
    <Greeting />
    <Greeting /> 
  </>   // Fragment
);
```
Pero si queremos que cada uno de esos componentes se comporte de manera diferente o que tenga alguna diferencia en la información (quizá colocarle un número identificador al final) podemos hacer uso de los Props, que son parámetros de los React Components. Veamos como hacerlo:

``` jsx
export function Greeting(props) {
  console.log(props);
  
  return <div>
    <h1> {props.title} </h1>
  </div>
}
```

En consola, esto nos devolverá un Object vacío que espera propiedades y valores.
Para poder crear estos valores con sus respectivas propiedades, modificaremos la etiqueta que renderiza dicho Component, añadiéndo la propiedad y su valor como un atributo y su valor respectivamente, tal como se haría en HTML:

``` javascript
// index.js
root.render(
  <>    
    <Greeting title="Hola Mundo"/>
    <Greeting title="Hola React"/>
    <Greeting title="Hola JSX"/> 
  </>   // Fragment
);
```
Estamos añadiendo propiedades al constructor del Component desde `Greeting.jsx` y modificandolás al añadirlas como un atributo HTML con su respectivo valor.

Nótese que el nombre del atributo que declaramos en la etiqueta HTML debe coincidir con la propiedad a la que queremos acceder desde el constructor del Componente.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664000073420/esb9NTrRI.png align="left")

También podemos desestructurar los parámetros del Component dado que es un Objeto:

``` jsx
export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  
  return <div>
    <h1> { title } </h1>
    <h2> { name } </h2>
  </div>
}
```

Podemos manejar varios Props en un Component y retornarlos como sea:

``` jsx
// UserCard.jsx

export function UserCard({ name, amount, isAdult, points, address, alerting }) {
  return (
    <div>
      <h1> {name}</h1>
      <p> ${amount}</p>
      <p> {isAdult ? "Adult" : "Young"} </p>
      <ol>
        <li> {points[0]} </li>
        <li> {points[1]} </li>
        <li> {points[2]} </li>
      </ol>
      <ul>
        <li> City: {address.city} </li>
        <li> Street: {address.street} </li>
      </ul>
    </div>
  );
}
```

``` javascript
// index.js

root.render(
  <>
    <UserCard
      name="Luisfer"
      amount={5000}
      isAdult={true}
      points={[1, 5, 7]}
      address={{ street: "5th Street", city: "FL" }}
      alerting={() => alert('Hello!')}
    />

    <UserCard
      name="Jerry"
      amount={1500}
      isAdult={false}
      points={[2, 4, 6]}
      address={{ street: "Main Avenue", city: "NY"}}
    />
  </> // Fragment
);
```
De esta manera podemos crear muy fácil varios Componentes sin escribir mucho código.

Más información en: [Componentes y propiedades](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)

## DefaultProps

Para explicar los DefaultProps creemos un nuevo Componente `Button.jsx`

``` jsx
// Button.jsx
export function Button({text}) {
  console.log(text)
  return <button>Mi Botón</button>;
}
```

``` javascript
// index.js
root.render(
  <>
  <Button text="Click me"/>
  <Button text="Pay Now"/>
  <Button text="Go to"/>
  </>
```

Los defaultProps y PropTypes nos permiten establecer el tipo de dato que puede admitir como argumento un Componente al invocarlo como un atributo desde la etiqueta HTML en `root.render()`

Para hacer uso de ellos, debemos instalar el paquete `prop-types` a través de npm con el siguiente comando:
``` bash
npm install prop-types
```

Luego, en nuestro `Button.jsx` importamos el paquete instalado: 
``` jsx
import PropTypes from 'prop-types'
```
Más información en: [Verificación de tipos con PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

Ahora podemos hacer uso de las funcionalidades de `prop-types`:

### `.propTypes`
Este método nos permite establecer el tipo de dato que deben tener las propiedades de un Componente:
``` jsx
// Button.jsx
export function Button({text, name}) {
  console.log(text)
  return <button>{text} - {name}</button>;
}

// .propTypes
Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string
}
```
Este método `.propTypes` define un Objeto que establece el tipo de dato de las propiedades de un Componente. `PropTypes` hace referencia al nombre con el que hemos importado el paquete `prop-types`, `.string` corresponde al tipo de dato de la propiedad, y `.isRequired` indica si dicha propiedad es requerida al renderizar el Componente en `root.render()`

``` javascript
root.render(
  <>
  <Button text="Click me"/>
  <Button text="Pay Now"/>
  <Button name="Bob"/>
  </>
);
```
Así pues, en el 3er Componente `<Button/>` obtendríamos un error indicando que la propiedad 'text' está definida como requerida en el Componente Button, pero que su valor es `undefined` al no estar definido.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664140168213/TDzXM9DO2.png align="left")

Más información en: [PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

### `.defaultProps`
Nos permite establecer el valor por defecto que tendrán las propiedades de los Componentes:
``` jsx
// Button.jsx
export function Button({text, name}) {
  console.log(text)
  return <button>{text} - {name}</button>;
}

// .defaultProps
Button.defaultProps = {
  name: "Username"
}
```

``` javascript
 root.render(
  <>
  <Button text="Click me"/>
  <Button text="Pay Now"/>
  <Button name="Bob"/>
  </>
);
```
En este caso, los 2 primeros Componentes `<Button/>` no tienen un atributo `name=""` definido, pero el método `.defaultProps` establecerá dicha propiedad con el valor "Username":

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664140416713/hQkC3hilX.png align="left")

Más información en: [Valores por defecto de props](https://es.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)

## Estilos de Componentes

Usando React tenemos varias formas de aplicar estilos CSS a nuestros Componentes:

### Estilos en línea
Igual a los estilos en línea declarados como un atributo HTML:

``` jsx
export function TaskCard() {
    return <div style={{background: '#202020', color: '#fff', padding: '20px'}}>
        <h1 style={{fontWeight: 'lighter'}}> Mi primera tarea</h1>
        <p> Tarea realizada </p>
    </div>
}
```
Añadimos en el elemento HTML al que queremos añadir los estilos, el atributo style={}. El código va entre {} porque es código Javascript que se ejecuta, e invoca un Objeto {} que tiene como propiedad la propiedad CSS y como valor el valor de dicha propiedad CSS entre comillas "".

Más información en: [Estilos en línea CSS en React](https://es.reactjs.org/docs/faq-styling.html#can-i-use-inline-styles)

### Código Javascript

Como el código que define los estilos está dentro de llaves {}, podemos ejecutar código Javascript en él. A saber:

``` jsx
export function TaskCard() {

  const cardStyles = {
    background: "#202020",
    color: "#fff",
    padding: "20px",
  };

  const titleStyle = {
    fontWeight: "lighter"
  }

  return (
    <div style={ cardStyles }>
      <h1 style={ titleStyle }> Mi primera tarea</h1>
      <p> Tarea realizada </p>
    </div>
  );
}
```

Hemos definido 2 constantes que son Objetos que contienen los estilos de los elementos. Luego, usamos dicha constante para aplicar el estilo.

### Clases de CSS
De esta manera podemos tener archivos `.css` específicos para Componentes.

Creamos un archivo `task-styles.css` que contiene las reglas CSS:

``` css
.card {
    background-color: #202020;
    color: #fafafa;
    padding: 20px;
}
```

Luego, en nuestro `Task.jsx` importamos dicho archivo y lo aplicamos al elemento HTML:

``` jsx
// Task.jsx
import './task-styles.css'

export function TaskCard() {

  return (
    <div className="card">
      <h1> Mi primera tarea</h1>
      <p> Tarea realizada </p>
    </div>
  );
}
```
Usamos el atributo `classname="card"` para establecer estilos CSS a los elementos de un Componente.

Podemos usar condicionales para establecer los estilos de un elemento en un Componente:

``` jsx
// Task.jsx
import "./task-styles.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1> Mi primera tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea completada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
```

``` css
// task-styles.css
.card {
    background-color: #202020;
    color: #fafafa;
    padding: 20px;
}

.bg-red {
    background-color: #aa0000;
    padding: 10px;
}

.bg-green {
    background-color: #00aa00;
    padding: 10px;
}
```

``` javascript
// index.js
root.render(
  <>
    <TaskCard ready={true}/>
  </> // Fragment
);
```
Si el atributo `ready` es true, entonces se mostrará el mensaje de Tarea completada

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664149932433/ybON78S09.png align="left")

En cambio, si es false, se mostrará el mensaje de Tarea pendiente

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664149997120/9VZHVGw9D.png align="left")

Más información en: [Agregar clases CSS a los Componentes en React](https://es.reactjs.org/docs/faq-styling.html#how-do-i-add-css-classes-to-components) [Aplicando estilos en React](https://es.survivejs.com/react/advanced-techniques/styling-react/)

## Tipos de Componentes

Hasta ahora hemos creado Componentes usando funciones. En React también podemos crear Componentes a través de Clases. Veamos como es su sintáxis:

``` jsx
// Saludar.jsx
// Componente a partir de Clases
// Debemos importar la clase Component
import { Component } from 'react'

// La clase Saludar se extiende de la clase Component
export class Saludar extends Component {
    render() {
        return <h1>Hello World</h1>
    }
}
```
Y en el `index.js` lo agregamos de igual manera que como un Componente declarado con función
``` javascript
// index.js
import { Saludar } from './Saludar'

root.render(
  <>
    <Saludar/>
    <TaskCard ready={false}/>
  </> // Fragment
);
```
Esta manera de escribir Componentes es muy verbosa, por lo tanto es mejor crear Componentes usando funciones.

## Event Handlers

Los Event Handlers (Manejadores de Eventos) nos permiten hacer algo cuando ocurre un determinado evento en una interfaz. Estos Event Handlers se usan mucho por ejemplo en Buttons, que se espera que ejecuten una funcion cuando se clican.

Podemos manejar los eventos desde el constructor de Componente:
``` jsx
// Button.jsx
export function Button({text, name}) {
  console.log(text)
  return <button onClick={(e) => {
    console.log("Click!")
    console.log(e)
  }}>{text} - {name}</button>;
}
```
En HTML todas las etiquetas tienen eventos que empiezan por el prefijo `on`, que toma como parámetro una función. Dicha función toma como parámetro el evento `e`, el cual es un Objeto, del que podemos acceder a sus propiedades y valores.
En este caso, el evento `onClick()` se activa cuando se clica dicho elemento. Ejecuta una función flecha que imprime por consola un "Click!" y el objeto `e`.

Más información en: [Manejando eventos](https://es.reactjs.org/docs/handling-events.html)

### `e.preventDefault()`
En eventos que al ser ejecutados hagan algun cambio sobre la página (Recargarla, mostrar alguna alerta, etc.) podemos prevenir dicho comportamiento por defecto con el método `e.preventDefault()`

``` javascript
// index.js
<form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Enviado");
      }}
    >
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button>Send</button>
    </form>
```
Se está evitando con `e.preventDefault()` que al clicar el Boton `<button></button>` se recargue la página, y que en vez de eso se muestre en consola un mensaje.

Más información en: [event.preventDefault](https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)

## Fetch API
La API Fetch nos permite traer datos de un url externo como puede ser una base de datos en nuestro Backend. Raramente tendremos todos nuestros datos en el Frontend, es por eso que buscamos pedir dichos datos desde el Backend a un servidor.
Haremos uso de [JSON Placeholder](https://jsonplaceholder.typicode.com/) para consultar datos desde Fetch API:

``` jsx
// Posts.jsx
export const Posts = () => {
  return (
    <button
      onClick={async (e) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        console.log("Obteniendo datos");
      }}
    >
      Traer Datos
    </button>
  );
};
```

``` javascript
// index.js
root.render(
  <>
    <Posts/>
  </> // Fragment
);
```
Usando una función asincrona que se ejecuta cuando el Button se clica imprimimos los datos en consola.

## Módulos de 3eros

Los módulos de Terceros nos permiten implementar en nuestra aplicación web Componentes y Elementos ya creados por la comunidad. Usaremos el módulo `react-icons` para importar Iconos. [React Icons](https://react-icons.github.io/react-icons) 

``` jsx
// Posts.jsx
// Importar react-icon from React Icons
import { FaInfoCircle } from "react-icons/fa";

export const Posts = () => {
  return (
    <button
      onClick={async (e) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        console.log("Obteniendo datos");
      }}
    >
        <FaInfoCircle/>
        Traer Datos
    </button>
  );
};
```

Hemos importado el modulo de React Icons y luego lo hemos colocado en el return como una etiqueta ya que es un Componente.
Así de facil podemos usar código de otros usuarios para trabajar de una manera más facil. Como por ejemplo Material UI.

## Arrays
Los Arrays en React se usan mucho para recorrerlos usando el método `.map`.
``` javascript
// index.js
const users = [
  {
    id: 1,
    name: "Luisfer Doria",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Leroy Jenkins",
    image: "https://robohash.org/user2",
  },
];
```
Para la propiedad imagen usamos una página llamada [RoboHash](https://robohash.org/) que genera imágenes de Robots, Monstruos, Aliens de manera aleatoria que usaremos como Placeholders.

Este array lo recorreremos y mostraremos las propiedades de los Objetos que contiene.

``` javascript
// index.js
root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} alt="Imagen" />
        </div>
      );
    })}
  </> // Fragment
);
```
Fijemonos en el uso del atributo `key={i}`. Es necesario por funcionamiento interno de React, y debe ser colocado en el elemento HTML que contenga a todos los demás elementos HTML, en este caso el `<div></div>`

## Hooks 

Son funciones que React nos ofrece para poder añadir funcionalidades extras a nuestro proyecto. Hasta ahora solo hemos creado Componentes y algunas de sus propiedades, pero no hemos visto como modificar dinamicamente nuestros Componentes. Con Hooks podremos usar estas funcionalidades extra.

Más información en: [Presentando Hooks](https://es.reactjs.org/docs/hooks-intro.html)

### `useState`
Este es uno de los Hooks más utilizados en React. El uso de `useState()` devuelve un Array con 2 elementos. Vamos a acceder a estos 2 elementos a través del Destructuring que tambien se puede aplicar a un Array:

``` javascript
const array = ["Luisfer", "Doria", "Estudiante"];

// Destructuring del Array para acceder al 1er y 2do elemento del array
const [ primerElemento, segundoElemento ] = array;
console.log(primerElemento);    // Luisfer
console.log(segundoElemento);    // Doria
```

Sabiendo esto, podemos usar el Hook `useState()`:

``` javascript
// index.js

// Importamos la libreria react y el Hook useState
import React, { useState } from "react";

// Contador con Hook useState()
function Counter() {

  // El primer elemento que creamos es la variable que modificaremos, y el 2do elemento es la funcion que actualiza la constante.
  // Luego, el useState() toma como parametro el valor inicial de la variable a modificar
  const [ counter, setCounter ] = useState(0)
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      // El evento onClick llamará a la funcion setCounter que toma como parametro el nuevo valor que se le dara a la variable counter
      <button onClick={() => { setCounter(counter + 1) }}>
        Sumar 1
      </button>

      <buttononClick={() => { setCounter(counter - 1) }}>
        Restar 1
      </button>

      <button onClick={() => {setCounter(0) }}>
        Restart
      </button>
    </div>
  );
} 
```
Esta es una manera muy facil de ver como trabaja este Hook. Se declara una constante que desestructura al Hook `useState(value)`; el primer valor sera la variable a actualizar, y el segundo valor sera la funcion que actualiza la variable. Finalmente, `value` es el valor inicial de la variable a actualizar.

Por lo general al desestructurar la funcion `useState()`, debemos seguir la siguiente sintaxis: `const [ variableName, setVariableName ] = useState(initialValue)`

Un ejemplo para inputs:
``` javascript
function Counter() {
  // El primer elemento que creamos es la variable que modificaremos, y el 2do elemento es la funcion que actualiza la constante.
  // Luego, el useState() toma como parametro el valor inicial de la variable a modificar
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(`El mensaje es ${mensaje}`)}> Save </button>
    </div>
  );
}
``` 
Más información en: [Usando el Hook de estado](https://es.reactjs.org/docs/hooks-state.html) [Entendiendo los Hooks de React](https://desarrollofront.medium.com/entendiendo-los-hooks-de-react-c%C3%B3mo-usar-usestate-y-useeffect-en-nuestros-componentes-611b9e826dfa#:~:text=import%20React%2C%20%7B%20useState%20%7D%20from,y%20la%20funci%C3%B3n%20para%20modificarla.)

## `useEffect`

El Hook `useEffect` ejecuta una función cuando se detecta un cambio en el Componente donde está contenido. Veamos como funciona:
``` javascript
// index.js

// Importamos la libreria react y los Hooks useState y useEffect
import React, { useState, useEffect } from "react";

// Contador con Hook useState() y useEffect()
function Counter() {
  // El primer elemento que creamos es la variable que modificaremos, y el 2do elemento es la funcion que actualiza la constante.
  // Luego, el useState() toma como parametro el valor inicial de la variable a modificar
  const [mensaje, setMensaje] = useState("");

  // Tenemos el Hook useEffect() que mostrara en consola el mensaje cada que este Componente se actualice, es decir, cada que escribamos un caracter en el input.
  useEffect( () => {
    console.log("Rendering")
  })

  return (
    <div>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(`El mensaje es ${mensaje}`)}> Save </button>
    </div>
  );
}
```
Este Hook se ejecutara cuando el Componente Counter se actualice y esto es muy útil para React.
A veces querremos que el Hook `useEffect()` se ejecute una sola vez, es decir, cuando el Componente que lo contiene se cree, para ello solo debemos agregar un array vacío como 2do parámetro al Hook `useEffect()` de la siguiente manera:

``` javascript 
// Contador con Hook useState() y useEffect()
function Counter() {
  // El primer elemento que creamos es la variable que modificaremos, y el 2do elemento es la funcion que actualiza la constante.
  // Luego, el useState() toma como parametro el valor inicial de la variable a modificar
  const [mensaje, setMensaje] = useState("");

  // Tenemos el Hook useEffect() que mostrara en consola el mensaje cada que este Componente se actualice, es decir, cada que escribamos un caracter en el input.
  useEffect( () => {
    console.log("Rendering")
  }, [ ] )   // Se ejecuta una sola vez. Cuando el Componente se crea

  return (
    <div>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(`El mensaje es ${mensaje}`)}> Save </button>
    </div>
  );
}
```
Si tenemos varias variables que se actualizan por medio de varios Hooks `useState()`, podemos definir que el Hook `useEffect()` se ejecute solo ante la actualizacion de un `useState()`. Esto lo hacemos escribiendo en el Array que toma como 2do parámetro el `useEffect()` la variable frente a la cual se ejecuta dicho Hook. 
Este Array se le conoce como dependencia porque el Hook `useEffect()` depende de la variable que se encuentra dentro del Array.

``` javascript
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
```
Más información en: [Usando el Hook de efecto](https://es.reactjs.org/docs/hooks-effect.html) [Entendiendo los Hooks de React](https://desarrollofront.medium.com/entendiendo-los-hooks-de-react-c%C3%B3mo-usar-usestate-y-useeffect-en-nuestros-componentes-611b9e826dfa#:~:text=import%20React%2C%20%7B%20useState%20%7D%20from,y%20la%20funci%C3%B3n%20para%20modificarla.)
