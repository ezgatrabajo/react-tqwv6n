import React, { Fragment, useState } from "react";

const Contacto = () => {
  const datos = [
    { id: 1, nombre: "ReactJs" },
    { id: 2, nombre: "VueJs" },
    { id: 3, nombre: "AngularJs" }
  ];
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    console.log("use efect");
    setEquipo(users);
    obtenerDatos();
    console.log(equipo);
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    console.log(users);
  };
  return (
    <div>
      <h1>Contacto</h1>
      <ul>
        {equipo.map(item => (
          <li key="item.id">
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacto;
