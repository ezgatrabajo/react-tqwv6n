import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Saludo from "./componentes/Saludo";
import Comentario from "./componentes/Comentario";
//const shortid = require("shortid");
import shortid from "shortid";

export default function App() {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">PROPS APP</h1>
      <hr />
      <Saludo persona="ezequiel" />
      <Saludo persona="juanito" edad={30} />
      <Saludo />
      <hr />
      <Comentario imagen="url" persona='ezequiel'
      texto='este es el texto de ejemplo'/>
      <Comentario imagen="url" persona='juancito'
      texto='este es el texto de ejemplo 2'/>
    </div>
  );
}
