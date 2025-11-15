import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import { Formulario } from "./Components/Formulario/Formulario";
import Equipe from "./Components/Equipe";

function App() {

  const [personagens, setPersonagens] = useState([]);

  function aoNovoPersonagemAdicionado(personagem) {
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      <Equipe nome="Mundano"/>
      <Equipe nome="Combatente Sobrevivente"/>
    </div>
  );
}

export default App;
