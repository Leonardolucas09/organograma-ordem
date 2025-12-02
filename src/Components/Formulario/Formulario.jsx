import "./Formulario.css";
import CampoTexto from "../CampoTexto/";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export function Formulario(props) {
  const [nome, setNome] = useState("");
  const [origem, setOrigem] = useState("");
  const [imagem, setImagem] = useState("");
  const [campanha, setCampanha] = useState("");
  const [classe, setClasse] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoPersonagemCadastrado({
      nome,
      origem,
      imagem,
      campanha,
      classe,
    });

    setNome("");
    setOrigem("");
    setImagem("");
    setCampanha("");
    setClasse("");
  };

  return (

    
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem.</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={origem}
          aoAlterado={(valor) => setOrigem(valor)}
          obrigatorio={true}
          label="Origem"
          placeholder="Digite sua origem"
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
        />
        <CampoTexto
          valor={campanha}
          aoAlterado={(valor) => setCampanha(valor)}
          obrigatorio={true}
          label="Campanha"
          placeholder="Digite o nome da campanha"
        />

        <ListaSuspensa
          valor={classe}
          aoAlterado={(valor) => setClasse(valor)}
          label="Classes"
          itens={props.classes}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}
