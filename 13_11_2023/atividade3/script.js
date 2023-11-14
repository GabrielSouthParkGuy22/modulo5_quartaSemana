function adicionarTarefa() {
  const task = document.getElementById("tarefa").value;
  const taskList = document.getElementById("listaTarefas");

  const newTask = document.createElement("li");
  newTask.innerHTML = `
  <p>${task}</p>
  <button onclick="removerTarefa(this)"> REMOVER </button>`;

  taskList.appendChild(newTask);
  document.getElementById("tarefaForm").reset();
}

function removerTarefa(button) {
  const task = button.parentNode;
  task.remove();
}
