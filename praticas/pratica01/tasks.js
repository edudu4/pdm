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
    tarefaFiltrada = tasks.filter(tasks => (taskId) == tasks.id)
    tasks.slice(tasks.indexOf(tarefaFiltrada))
}


addTasks({name:"Trabalhar", completed: true})
console.log(removeTask(1))
console.log(getTasks())
