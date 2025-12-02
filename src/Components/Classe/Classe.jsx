import Personagem from "../Personagem";
import Background from "./assets/Background.png";
import "./Classe.css";

export function Classe(props) {
  const fundo = { backgroundColor: props.corSecundaria };
  const borda = { borderColor: props.corPrimaria };

  return (
    (props.personagens.length > 0) && <section className="classe" style={fundo}>
      <h3 style={borda}>{props.nome}</h3>
      <div className="personagens">
        {props.personagens.map( personagem => <Personagem 
          corPrimaria={props.corPrimaria}
          key={personagem.nome}
          nome={personagem.nome} 
          origem={personagem.origem}
          imagem={personagem.imagem}/> 
        )}
      </div>
    </section>
  );
}
