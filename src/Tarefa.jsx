function Tarefa({ tarefa, aoDeletar, aoFazer }) {
    
  return (
    <div>
      <span>{tarefa.id} {tarefa.nome}</span>
      <button onClick={() => aoFazer()}>✓</button>
      <button onClick={() => aoDeletar()}>✕</button>
    </div>
  );
}

export default Tarefa;