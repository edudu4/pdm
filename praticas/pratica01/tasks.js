const tasks = [ {id: 1, name: "Estudar", completed: true} ]

function getTasks(){
    return tasks
}
const addTasks = (taskName) => {
   let idTarefa = tasks[tasks.length - 1]
   const tarefa = {
        id: idTarefa.id + 1,
        name: taskName.name,
        completed: false
    }
    tasks.push(tarefa)
}

function removeTask(taskId)  {
  for(var i = 0, j = tasks.length; i !== j; i++) {
    if(tasks[i].id === taskId) break;
  }
  tasks.splice(i, 1)
}


addTasks({name:"Trabalhar", completed: true})
console.log(getTasks())

removeTask(1);

console.log(getTasks())
