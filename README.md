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


La informaci??n presentada en este art??culo ha sido extra??da de [Curso de Reactjs](https://www.youtube.com/watch?v=rLoWMU4L_qE&list=RDCMUCX9NJ471o7Wie1DQe94RVIg&start_radio=1&rv=rLoWMU4L_qE&t=117&ab_channel=Fazt).

## Pre-requisitos

- [Node.js](https://nodejs.org/es/download/)
- [Visual Studio Code ](https://code.visualstudio.com/download) (O cualquier otro editor de texto)

## Crear proyecto de React 

Para crear nuestro proyecto de React podemos usar 2 m??todos:

###  [`create-react-app`](https://create-react-app.dev/): Nos permite crear una aplicaci??n de React en 1 sola linea de c??digo. Es el m??s conocido.

###  [Vite.js](https://vitejs.dev/): Es m??s r??pido que `create-react-app` y permite crear proyectos de distintos frameworks y librer??as. 

Usaremos `create-react-app`. Para eso, vamos a nuestra terminal y escribimos:

``` bash
npx create-react-app react-js-course
```

Luego de unos minutos de instalaci??n, nuestra aplicaci??n en React ser?? creada y podremos acceder a ella usando el comando `cd react-js-course`. Para iniciar nuestro proyecto basta con ejecutar el comando `npm start`. Se compilar?? nuestro proyecto y luego nos abrir?? el `index.html` de nuestra app.

Una vez iniciada la app, nuestra terminal cambiar?? y nos mostrar?? el siguiente mensaje:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663815085280/MGqL6pewi.png align="left")

Nos mostrar?? el enlace para acceder a nuestra app de manera local y en nuestra Red. N??tese que estamos en un entorno de desarrollo, pues nos indica que podemos usar el comando `npm run build` para construir el paquete de producci??n, que es el que finalmente podremos subir a internet. 

React usa webpack para compilar el proyecto.

Puedes acceder al repositorio de este proyecto [aqu??](https://github.com/luis123doria/react-js-from-scratch).

## Estructura del Proyecto

Una vez accedemos a la carpeta de nuestro proyecto vamos a ver unas cuantas carpetas y archivos:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663816081581/_kErC3ER1.png align="left")

### Carpeta `src`
Esta contiene todos los archivos y recursos que usaremos en nuestra aplicaci??n.
Si vamos a `index.js` veremos que el c??digo lo que hace es importar las bibliotecas que usa Javascript.

Vemos en esta carpeta que podemos a??adir los archivos de Javascript y CSS, algo que no se hace con otros frameworks, pero s?? en React.

### Carpeta `public`
En esta carpeta se encuentra el `index.html` al cual agregaremos todo el c??digo CSS y Javascript.
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

Este divider es donde estar?? todo el contenido de nuestra p??gina web. React js trabaja por componentes e interfaces, que son los que componen todo el sitio. Al final, todos estas interfaces se unir??n en un archivo .html para mostrarse en la p??gina

### Carpeta ra??z `./`
En el directorio de nuestro proyecto podemos ver el archivo `package.json` el cual contiene informaci??n (nombre y versi??n) de los paquetes y librer??as que usaremos en nuestro proyecto, as?? como algunos scripts como `npm start` o `npm run build`, que son alias para c??digo m??s largo.

Tambi??n encontramos el archivo `package-lock.json`, el cual sirve para tener un seguimiento de los paquetes que est??n instalados en la carpeta `node_modules`


### Carpeta `node_modules`
Esta carpeta se crea autom??ticamente cuando creamos un proyecto con Node.js y contiene archivos de bibliotecas y librer??as.

## Hola Mundo

Vamos a escribir un sencillo Hola Mundo en nuestra aplicaci??n en React. Para ello borraremos la carpeta `./src` y crearemos una nueva. 
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

Luego, usaremos un m??todo de React llamado .render() que 'renderiza' en la p??gina un componente:

``` javascript
root.render(<h1> Hola Mundo </h1>)
```

Una vez guardamos el proyecto, vemos que nuestra pagina renderiza lo que hay dentro del `<div id='root'></div>` que es un `<h1> Hola Mundo </h1>`.

## Componentes en React

Supongamos que queremos crear un sitio web con la siguiente estructura:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663993306220/Ct-nms20C.png align="left")

Es una estructura bastante com??n con un **navbar**, un **sidebar** un **main** y varios **post** dentro del **main**. Lo que nos dice React es que en una aplicaci??n web tendremos multiples partes, entones: ??Por qu?? no dividir todas estas partes? De esta forma se pueden mantener individualmente cada una de estas partes. Cada una de estas partes se conocen en React como **Componentes**. 

En ese sentido, los Components son porciones de c??digo de una interfaz mucho m??s grande. Los componentes son reutilizables. 

Cuando creamos una aplicaci??n con React, tendremos 1 componente inicial que va a contener a todos los dem??s componentes. Este es el componente al que React llama **Root Component**, y es el equivalente a la etiqueta `<body></body>` en HTML5, que engloba a las dem??s etiquetas en un archivo .html.

M??s informaci??n en: [Renderizando elementos](https://es.reactjs.org/docs/rendering-elements.html)

## Creando Componentes

En la pr??ctica, los **Components** en React son funciones que retornan porciones de c??digo HTML, CSS y Javascript.

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
Los components en React son funciones que se declaran con la primera letra en may??scula.

Al renderizar el Root Component podemos agregar varios Components. Veamos un ejemplo:

``` javascript
// index.js
root.render(
<div>
    { Greeting() }
</div>
)      // This is a React Component
```
Podemos ejecutar c??digo dentro de las etiquetas HTML si lo encerramos dentro de llaves {}. Pero esto no se ve bien, lo que React nos permite hacer es declarar el Component como una etiqueta HTML.

``` javascript
// index.js
root.render( 
    <Greeting/>
)      // This is a React Component
```

Esta es una manera m??s sencilla de renderizar un React Component. Estas etiquetas tienen algo llamado **Self Closing Tag**, que les permite cerrarse sin necesidad de una segunda etiqueta de cierre.

M??s informaci??n en: [Componentes y Propiedades](https://es.reactjs.org/docs/components-and-props.html)

## JSX

JSX nos permite retornar porciones de c??digo en HTML, que al final ser?? convertido en c??digo Javascript puro

JSX permite combinar c??digo HTML y Javascript en un solo bloque de c??digo.

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
En JSX si queremos ejecutar c??digo Javascript dentro de una etiqueta HTML, usaremos unas {}.

### Operador Ternario para condicionales

El Operador Ternario es un operador que se usa bastante en React, y permite simplificar muchas l??neas de c??digo en comparaci??n de la condicional if-else:

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

Si queremos retornar un Objeto de Javascript en un Componente de React nos tirar?? un error ya que React no sabe como imprimir en pantalla un dato de tipo Objeto. En ese caso, usaremos una funcionalidad de Javascript: `JSON.stringify(object_name)`, que nos permite transformar un Objeto en un string que si puede leer React.

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

M??s informaci??n en: [Presentando JSX](https://es.reactjs.org/docs/introducing-jsx.html)

## ECMAScript Modules

Escribir todo el c??digo de nuestra aplicaci??n web en un solo archivo ser??a algo muy dif??cil de mantener y actualizar con el tiempo. Es por ello que se usan los `modules` para poder importar y exportar diferentes archivos y funcionalidades de los mismos. Veamos como aplicarlo a nuestro proyecto:

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
Creamos un nuevo archivo en `./src` llamado `Greeting.js` que contendr?? el Component. A??adimos la palabra clave `export` antes de la declaraci??n del Component para indicarle a Javascript que exportaremos esta funci??n y que podremos usarla en otros archivos de Javascript.

``` javascript
// index.js

import { Greeting } from "./Greeting";
```
Ahora, en nuestro `index.js` solo basta con importar el Component Greeting desde la ruta `./Greeting` (No es necesario colocar la extensi??n, ya que `create-react-app` se ocupa de ello)

M??s informaci??n en: [??Qu?? son los m??dulos ES?](https://lenguajejs.com/javascript/modulos/que-es-esm/#qu%C3%A9-son-los-m%C3%B3dulos-es) [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Extensi??n JSX

Los archivos que contengan Components y elementos de React podemos renombrarlos con la extensi??n `.jsx`
A partir de aqu??, los archivos que contengan Components tendr??n la extensi??n `.jsx`

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
Pero si queremos que cada uno de esos componentes se comporte de manera diferente o que tenga alguna diferencia en la informaci??n (quiz?? colocarle un n??mero identificador al final) podemos hacer uso de los Props, que son par??metros de los React Components. Veamos como hacerlo:

``` jsx
export function Greeting(props) {
  console.log(props);
  
  return <div>
    <h1> {props.title} </h1>
  </div>
}
```

En consola, esto nos devolver?? un Object vac??o que espera propiedades y valores.
Para poder crear estos valores con sus respectivas propiedades, modificaremos la etiqueta que renderiza dicho Component, a??adi??ndo la propiedad y su valor como un atributo y su valor respectivamente, tal como se har??a en HTML:

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
Estamos a??adiendo propiedades al constructor del Component desde `Greeting.jsx` y modificandol??s al a??adirlas como un atributo HTML con su respectivo valor.

N??tese que el nombre del atributo que declaramos en la etiqueta HTML debe coincidir con la propiedad a la que queremos acceder desde el constructor del Componente.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664000073420/esb9NTrRI.png align="left")

Tambi??n podemos desestructurar los par??metros del Component dado que es un Objeto:

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
De esta manera podemos crear muy f??cil varios Componentes sin escribir mucho c??digo.

M??s informaci??n en: [Componentes y propiedades](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)

## DefaultProps

Para explicar los DefaultProps creemos un nuevo Componente `Button.jsx`

``` jsx
// Button.jsx
export function Button({text}) {
  console.log(text)
  return <button>Mi Bot??n</button>;
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

Para hacer uso de ellos, debemos instalar el paquete `prop-types` a trav??s de npm con el siguiente comando:
``` bash
npm install prop-types
```

Luego, en nuestro `Button.jsx` importamos el paquete instalado: 
``` jsx
import PropTypes from 'prop-types'
```
M??s informaci??n en: [Verificaci??n de tipos con PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

Ahora podemos hacer uso de las funcionalidades de `prop-types`:

### `.propTypes`
Este m??todo nos permite establecer el tipo de dato que deben tener las propiedades de un Componente:
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
Este m??todo `.propTypes` define un Objeto que establece el tipo de dato de las propiedades de un Componente. `PropTypes` hace referencia al nombre con el que hemos importado el paquete `prop-types`, `.string` corresponde al tipo de dato de la propiedad, y `.isRequired` indica si dicha propiedad es requerida al renderizar el Componente en `root.render()`

``` javascript
root.render(
  <>
  <Button text="Click me"/>
  <Button text="Pay Now"/>
  <Button name="Bob"/>
  </>
);
```
As?? pues, en el 3er Componente `<Button/>` obtendr??amos un error indicando que la propiedad 'text' est?? definida como requerida en el Componente Button, pero que su valor es `undefined` al no estar definido.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664140168213/TDzXM9DO2.png align="left")

M??s informaci??n en: [PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

### `.defaultProps`
Nos permite establecer el valor por defecto que tendr??n las propiedades de los Componentes:
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
En este caso, los 2 primeros Componentes `<Button/>` no tienen un atributo `name=""` definido, pero el m??todo `.defaultProps` establecer?? dicha propiedad con el valor "Username":

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664140416713/hQkC3hilX.png align="left")

M??s informaci??n en: [Valores por defecto de props](https://es.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)

## Estilos de Componentes

Usando React tenemos varias formas de aplicar estilos CSS a nuestros Componentes:

### Estilos en l??nea
Igual a los estilos en l??nea declarados como un atributo HTML:

``` jsx
export function TaskCard() {
    return <div style={{background: '#202020', color: '#fff', padding: '20px'}}>
        <h1 style={{fontWeight: 'lighter'}}> Mi primera tarea</h1>
        <p> Tarea realizada </p>
    </div>
}
```
A??adimos en el elemento HTML al que queremos a??adir los estilos, el atributo style={}. El c??digo va entre {} porque es c??digo Javascript que se ejecuta, e invoca un Objeto {} que tiene como propiedad la propiedad CSS y como valor el valor de dicha propiedad CSS entre comillas "".

M??s informaci??n en: [Estilos en l??nea CSS en React](https://es.reactjs.org/docs/faq-styling.html#can-i-use-inline-styles)

### C??digo Javascript

Como el c??digo que define los estilos est?? dentro de llaves {}, podemos ejecutar c??digo Javascript en ??l. A saber:

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
De esta manera podemos tener archivos `.css` espec??ficos para Componentes.

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
Si el atributo `ready` es true, entonces se mostrar?? el mensaje de Tarea completada

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664149932433/ybON78S09.png align="left")

En cambio, si es false, se mostrar?? el mensaje de Tarea pendiente

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664149997120/9VZHVGw9D.png align="left")

M??s informaci??n en: [Agregar clases CSS a los Componentes en React](https://es.reactjs.org/docs/faq-styling.html#how-do-i-add-css-classes-to-components) [Aplicando estilos en React](https://es.survivejs.com/react/advanced-techniques/styling-react/)

## Tipos de Componentes

Hasta ahora hemos creado Componentes usando funciones. En React tambi??n podemos crear Componentes a trav??s de Clases. Veamos como es su sint??xis:

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
Y en el `index.js` lo agregamos de igual manera que como un Componente declarado con funci??n
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
En HTML todas las etiquetas tienen eventos que empiezan por el prefijo `on`, que toma como par??metro una funci??n. Dicha funci??n toma como par??metro el evento `e`, el cual es un Objeto, del que podemos acceder a sus propiedades y valores.
En este caso, el evento `onClick()` se activa cuando se clica dicho elemento. Ejecuta una funci??n flecha que imprime por consola un "Click!" y el objeto `e`.

M??s informaci??n en: [Manejando eventos](https://es.reactjs.org/docs/handling-events.html)

### `e.preventDefault()`
En eventos que al ser ejecutados hagan algun cambio sobre la p??gina (Recargarla, mostrar alguna alerta, etc.) podemos prevenir dicho comportamiento por defecto con el m??todo `e.preventDefault()`

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
Se est?? evitando con `e.preventDefault()` que al clicar el Boton `<button></button>` se recargue la p??gina, y que en vez de eso se muestre en consola un mensaje.

M??s informaci??n en: [event.preventDefault](https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)

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
Usando una funci??n asincrona que se ejecuta cuando el Button se clica imprimimos los datos en consola.

## M??dulos de 3eros

Los m??dulos de Terceros nos permiten implementar en nuestra aplicaci??n web Componentes y Elementos ya creados por la comunidad. Usaremos el m??dulo `react-icons` para importar Iconos. [React Icons](https://react-icons.github.io/react-icons) 

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
As?? de facil podemos usar c??digo de otros usuarios para trabajar de una manera m??s facil. Como por ejemplo Material UI.

## Arrays
Los Arrays en React se usan mucho para recorrerlos usando el m??todo `.map`.
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
Para la propiedad imagen usamos una p??gina llamada [RoboHash](https://robohash.org/) que genera im??genes de Robots, Monstruos, Aliens de manera aleatoria que usaremos como Placeholders.

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
Fijemonos en el uso del atributo `key={i}`. Es necesario por funcionamiento interno de React, y debe ser colocado en el elemento HTML que contenga a todos los dem??s elementos HTML, en este caso el `<div></div>`

## Hooks 

Son funciones que React nos ofrece para poder a??adir funcionalidades extras a nuestro proyecto. Hasta ahora solo hemos creado Componentes y algunas de sus propiedades, pero no hemos visto como modificar dinamicamente nuestros Componentes. Con Hooks podremos usar estas funcionalidades extra.

M??s informaci??n en: [Presentando Hooks](https://es.reactjs.org/docs/hooks-intro.html)

### `useState`
Este es uno de los Hooks m??s utilizados en React. El uso de `useState()` devuelve un Array con 2 elementos. Vamos a acceder a estos 2 elementos a trav??s del Destructuring que tambien se puede aplicar a un Array:

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
      // El evento onClick llamar?? a la funcion setCounter que toma como parametro el nuevo valor que se le dara a la variable counter
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
M??s informaci??n en: [Usando el Hook de estado](https://es.reactjs.org/docs/hooks-state.html) [Entendiendo los Hooks de React](https://desarrollofront.medium.com/entendiendo-los-hooks-de-react-c%C3%B3mo-usar-usestate-y-useeffect-en-nuestros-componentes-611b9e826dfa#:~:text=import%20React%2C%20%7B%20useState%20%7D%20from,y%20la%20funci%C3%B3n%20para%20modificarla.)

## `useEffect`

El Hook `useEffect` ejecuta una funci??n cuando se detecta un cambio en el Componente donde est?? contenido. Veamos como funciona:
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
Este Hook se ejecutara cuando el Componente Counter se actualice y esto es muy ??til para React.
A veces querremos que el Hook `useEffect()` se ejecute una sola vez, es decir, cuando el Componente que lo contiene se cree, para ello solo debemos agregar un array vac??o como 2do par??metro al Hook `useEffect()` de la siguiente manera:

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
Si tenemos varias variables que se actualizan por medio de varios Hooks `useState()`, podemos definir que el Hook `useEffect()` se ejecute solo ante la actualizacion de un `useState()`. Esto lo hacemos escribiendo en el Array que toma como 2do par??metro el `useEffect()` la variable frente a la cual se ejecuta dicho Hook. 
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
M??s informaci??n en: [Usando el Hook de efecto](https://es.reactjs.org/docs/hooks-effect.html) [Entendiendo los Hooks de React](https://desarrollofront.medium.com/entendiendo-los-hooks-de-react-c%C3%B3mo-usar-usestate-y-useeffect-en-nuestros-componentes-611b9e826dfa#:~:text=import%20React%2C%20%7B%20useState%20%7D%20from,y%20la%20funci%C3%B3n%20para%20modificarla.)
