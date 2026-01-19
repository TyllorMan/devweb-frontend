import { useState } from "react";
import Tarefa from "./Tarefa";

function Todo() {
  const estiloTodo = {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
  }

  const estiloTarefas = {

  }

  const [nextId, setNextId] = useState(0);

  const [tarefas, setTarefas] = useState([])
  const [tarefasDoing, setTarefasDoing] = useState([])
  const [tarefasDone, setTarefasDone] = useState([])

  const [novaTarefa, setNovaTarefa] = useState("")

  const addTarefa = (tarefa) => {
    const tarefasUpdated = [...tarefas, { id: nextId, nome: tarefa }];
    setTarefas(tarefasUpdated);
    setNovaTarefa("");
    setNextId(nextId + 1);
    console.log("Todo list..");
    console.log(tarefasUpdated);
  }

  const removeTarefa = (id) => {
    const tarefasUpdated = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasUpdated);
    console.log("removendo")
    console.log(tarefasUpdated);
  }

    const removeTarefaDoing = (id) => {
    const tarefasUpdated = tarefasDoing.filter((tarefa) => tarefa.id !== id);
    setTarefasDoing(tarefasUpdated);
    console.log("removendo")
    console.log(tarefasUpdated);
  }

  const removeTarefaDone = (id) => {
    const tarefasUpdated = tarefasDone.filter((tarefa) => tarefa.id !== id);
    setTarefasDone(tarefasUpdated);
    console.log("removendo")
    console.log(tarefasUpdated);
  }

  const defazerTarefa = (id) => {
    const tarefaToMove = tarefasDoing.find((tarefa) => tarefa.id === id);
    const tarefasUpdated = [...tarefas, tarefaToMove];
    setTarefas(tarefasUpdated);
    removeTarefaDoing(id);
    console.log("Fazendo.."+tarefasUpdated);
  }

    const defazerTarefaFeita = (id) => {
    const tarefaToMove = tarefasDone.find((tarefa) => tarefa.id === id);
    const tarefasUpdated = [...tarefasDoing, tarefaToMove];
    setTarefasDoing(tarefasUpdated);
    removeTarefaDone(id);
    console.log("Fazendo.."+tarefasUpdated);
  }

  const fazerTarefa = (id) => {
    const tarefaToMove = tarefas.find((tarefa) => tarefa.id === id);
    const tarefasUpdated = [...tarefasDoing, tarefaToMove];
    setTarefasDoing(tarefasUpdated);
    removeTarefa(id, tarefas);
    console.log("Fazendo.."+tarefasUpdated);
  }

   const tarefaFeita = (id) => {
    const tarefaToMove = tarefasDoing.find((tarefaDoing) => tarefaDoing.id === id);
    const tarefasUpdated = [...tarefasDone, tarefaToMove];
    setTarefasDone(tarefasUpdated);
    removeTarefaDoing(id, tarefasDoing);
    console.log("Fazendo.."+tarefasUpdated);
  }
  
  return (
    <div>
      <p>A fazer</p>
      <div style={estiloTodo}>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id} style={estiloTarefas}>
              <Tarefa tarefa={{ id: tarefa.id, nome: tarefa.nome }} aoDeletar={() => removeTarefa(tarefa.id)} aoFazer={() => fazerTarefa(tarefa.id)} />
          </div>    
        ))}
      </div>
      <p>Fazendo</p>
       <div style={estiloTodo}>
        {tarefasDoing.map((tarefaDoing) => (
          <div key={tarefaDoing.id}>
              <Tarefa tarefa={{ id: tarefaDoing.id, nome: tarefaDoing.nome }} aoDeletar={() => defazerTarefa(tarefaDoing.id)} aoFazer={() => tarefaFeita(tarefaDoing.id)} />
          </div>
        ))}
      </div>  
       <p>Feito</p>

      <div style={estiloTodo}>
        {tarefasDone.map((tarefaDone) => (
          <div key={tarefaDone.id}>
              <Tarefa tarefa={{ id: tarefaDone.id, nome: tarefaDone.nome }} aoDeletar={() => defazerTarefaFeita(tarefaDone.id)} aoFazer={() => console.log(`Fazendo tarefa com id: ${tarefaDone.id}`)} />
          </div>    
        ))}
     </div>
      <div>
        <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
        <button onClick={() => addTarefa(novaTarefa)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Todo;