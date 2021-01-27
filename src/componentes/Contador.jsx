import React, { Fragment, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const eventoClick = () => {
    console.log("Aumentar");
    setContador(contador + 1);
  };

  return (
    <Fragment>
      <hr />
      <h2>Contador</h2>

      <h3>{contador}</h3>
      
      <h4>
      { contador > 2 ? 'mayor a 2': 'es menor o igual a 2'}
      </h4>
      <button onClick={() => eventoClick()}>Aumentar</button>
    </Fragment>
  );
};

export default Contador;
