import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import { Formulario } from "./Components/Formulario/Formulario";
import Classe from "./Components/Classe";
import Rodape from "./Components/Rodape";

function App() {
  const classes = [
    {
      nome: "Mundano",
      corPrimaria: "#55710F",
      corSecundaria: "#677052",
    },
    {
      nome: "Combatente Sobrevivente",
      corPrimaria: "#B22722",
      corSecundaria: "#AE6D6A",
    },
    {
      nome: "Especialista Sobrevivente",
      corPrimaria: "#91CF3A",
      corSecundaria: "#C2DB9F",
    },
    {
      nome: "Ocultista Sobrevivente",
      corPrimaria: "#AB62C5",
      corSecundaria: "#CCB1D5",
    },
    {
      nome: "Combatente",
      corPrimaria: "#8D4711",
      corSecundaria: "#8F7A69",
    },
    {
      nome: "Especialista",
      corPrimaria: "#D1D13E",
      corSecundaria: "#DEDEAE",
    },
    {
      nome: "Ocultista",
      corPrimaria: "#6C108D",
      corSecundaria: "#85688F",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  function aoNovoPersonagemAdicionado(personagem) {
    debugger
    setPersonagens([...personagens, personagem]);
  }

  return (
    <div className="App">
      <Banner />
      {/* <ListaSuspensa></ListaSuspensa> */}
      <Formulario
        classes={classes.map(classe => classe.nome)}
        aoPersonagemCadastrado={personagem => 
          aoNovoPersonagemAdicionado(personagem)
        }
      />

      {classes.map(classe => 
        <Classe key={classe.nome} 
                nome={classe.nome} 
                corPrimaria={classe.corPrimaria} 
                corSecundaria={classe.corSecundaria}
                personagens={personagens.filter(personagem => personagem.classe === classe.nome)}
        />
      )}
    <Rodape/>
    </div>
  );
}

export default App;
