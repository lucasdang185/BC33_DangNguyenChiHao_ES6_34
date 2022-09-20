const addItem = document.querySelector("#addItem");

const myListTask = new ListTask()


const getValues = () => {
    const input = document.querySelector('#newTask').value
    const task = new Task()
    task['name'] = input
    return task
}
const renderTaskList = () => {
  const listTask  = myListTask.listTask;
  const html = listTask.reduce((value, task) => {
    return (value += `
        <li><span>${task.name}</span>
                            <div class="buttons">
                                <button class="remove" onclick="removeTask('${task.name}')">
                                <i class="fas fa-trash"></i>
                                </button>
                                <button class="complete" onclick="addTaskCompleted('${task.name}')">
                                    <i class="far fa-check-circle"></i>
                                </button>
                            </div>
                        </li>
        `);
  }, "");
  document.querySelector("#todo").innerHTML = html;
};

const renderTaskCompleted = () => {
  const listTaskCompleted = myListTask.listTaskCompleted;
  const html = listTaskCompleted.reduce((value, task) => {
    return (value += `
        <li><span>${task.name}</span>
                            <div class="buttons">
                                <button class="remove" onclick="removeTaskCompleted('${task.name}')">
                                <i class="fas fa-trash"></i>
                                </button>
                                <button class="complete" onclick="addTaskListFromCompleted('${task.name}')">
                                    <i class="far fa-check-circle"></i>
                                </button>
                            </div>
                        </li>
        `);
  }, "");
  document.querySelector("#completed").innerHTML = html;
};

addItem.onclick = () => {
    const task = getValues()
    myListTask.addTask(task)
    getValues()
    renderTaskList()
}

window.removeTask = (name) => {
    myListTask.removeTask(name)
    renderTaskList()
}

window.removeTaskCompleted = (name) => {
    myListTask.removeTaskCompleted(name)
    renderTaskCompleted()
}

window.addTaskCompleted = (name) => {
    myListTask.addTaskCompleted(name)
    ,
    renderTaskCompleted()
    myListTask.removeTask(name)
    renderTaskList()
}

window.addTaskListFromCompleted = (name) => {
    myListTask.addTaskListFromCompleted(name)
    console.log(myListTask.listTask);
    renderTaskList()
    myListTask.removeTaskCompleted(name)
    renderTaskCompleted()
}
