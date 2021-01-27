import React, { Fragment, useState } from "react";
import Image from "./Image";

const Comentario = props => {
  return (
    <div className="media">
      <Image imagen={props.imagen} />
      <div classMedia="media-body">
        <h5 className="mt-0"> {props.persona}</h5>
        {props.texto}
      </div>
    </div>
  );
};
export default Comentario;
