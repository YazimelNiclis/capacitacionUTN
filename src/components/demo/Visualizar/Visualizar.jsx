import React from "react";
import "./visualizar.css";
function Visualizar(props) {
  return (
    <div className="contenedorVisualizar">
      {props.numeros.map((numeroIndividual) => {
        return <div>{numeroIndividual}</div>;
      })}
    </div>
  );
}

export default Visualizar;
