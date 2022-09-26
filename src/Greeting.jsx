// Creacion de un Component
export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  
  return <div>
    <h1> { title } </h1>
    <h2> { name } </h2>
  </div>
}
