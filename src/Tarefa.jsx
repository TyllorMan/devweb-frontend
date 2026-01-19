function Tarefa({ tarefa, aoDeletar, aoFazer }) {

    const estiloTarefa = {
      backgroundColor: "#f1f1f1",
      margin: "10px",
      padding: "20px",
      fontSize: "16px",
    }
  
    
  return (
    <div style={estiloTarefa}>
      <span>{tarefa.id} {tarefa.nome}</span>
      <button onClick={() => aoFazer()}>✓</button>
      <button onClick={() => aoDeletar()}>✕</button>
    </div>
  );
}

export default Tarefa;