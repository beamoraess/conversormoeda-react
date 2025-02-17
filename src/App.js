import React from "react";
import "./App.css";

import Conversor from "./componentes/Conversor";

function App() {
  return (
    <div className="App">
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="MUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="MUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
