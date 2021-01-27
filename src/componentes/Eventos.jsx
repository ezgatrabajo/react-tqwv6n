import React, { Fragment, useState } from "react";

const Eventos = () => {
  const [texto, setTexto] = useState("hola mundo ");

  const eventoClick = () => {
    console.log("hiciste click");
    setTexto("nuevo valor");
  };

  return (
    <Fragment>
      <hr />
      <h2>{texto}</h2>
      <button onClick={() => eventoClick()}>boton</button>
    </Fragment>
  );
};

export default Eventos;
