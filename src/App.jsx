import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Agregar from "./components/demo/Agregar/Agregar";
import Visualizar from "./components/demo/Visualizar/Visualizar";

function App() {
  const [numeros, setNumeros] = useState([]);
  const onClickBoton = (numeroNuevo) => {
    setNumeros([...numeros, numeroNuevo]);
  };

  return (
    <div className="App">
      <Agregar agregarNumero={onClickBoton} />
      <Visualizar numeros={numeros} />
    </div>
  );
}

export default App;
