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
