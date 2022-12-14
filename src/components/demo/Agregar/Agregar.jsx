import React from "react";
import { useState } from "react";
import Visualizar from "../Visualizar/Visualizar";
import "./agregar.css";

function Agregar(props) {
  const [numeroCargado, setNumeroCargado] = useState(0);
  const onChangeNumero = (e) => {
    setNumeroCargado(e.target.value);
  };

  const onClickBoton = () => {
    props.agregarNumero(numeroCargado);
  };
  return (
    <div className="contenedorAgregar">
      <input onChange={onChangeNumero} placeholder="Ingresar un numero"></input>
      <button className="botonAgregar" name="agregar" onClick={onClickBoton}>
        AGREGAR
      </button>
    </div>
  );
}

export default Agregar;
