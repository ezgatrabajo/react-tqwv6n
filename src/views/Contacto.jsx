import React, { Fragment, useState } from "react";

const Contacto = () => {
  const datos = [
    { id: 1, nombre: "ReactJs" },
    { id: 2, nombre: "VueJs" },
    { id: 3, nombre: "AngularJs" }
  ];

  React.useEffect(() => {
    console.log("use efect");
  });

  return (
    <div>
      <h1>Contacto</h1>
    </div>
  );
};

export default Contacto;
