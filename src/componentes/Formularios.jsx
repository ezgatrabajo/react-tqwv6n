import React, { Fragment, useState } from "react";

import { Button, Form } from "react-bootstrap";
const Formularios = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const guardarDatos = e => {
    e.preventDefault();
    console.log("procesando datos...");
    if (!nombre.trim()) {
      console.log("esta vacio nombre");
      return;
    }
    if (!descripcion.trim()) {
      console.log("esta vacio descripcion");
      return;
    }
    console.log("procesando datos...");
    e.target.reset();
    setNombre("");
    setDescripcion("");
  };

  return (
    <Fragment>
      <hr />

      <h2>Formularios</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="ingrese nombre"
          onChange={e => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="ingrese Descripcion"
          onChange={e => setDescripcion(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </Fragment>
  );
};

export default Formularios;
