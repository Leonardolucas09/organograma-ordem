import "./CampoTexto.css";

export function CampoTexto(props) {
  const placeholderModificado = `${props.placeholder}...`;
  
  function aoDigitado(evento) {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificado}
      />
    </div>
  );
}
