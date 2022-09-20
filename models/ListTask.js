

class ListTask {
    constructor() { }
    listTask = []
    tasks = []
    tasks1 = []
    tasks2 = []
    tasks3 = []
    listTaskCompleted = []

    //them cong viec
    addTask(task) {
        this.listTask = [...this.listTask, task]
    }

    removeTask(name) {
        this.listTask = this.listTask.filter((task) => task.name !== name)
    }

    removeTaskCompleted(name) {
        this.listTaskCompleted = this.listTaskCompleted.filter((task) => task.name !== name)
    }

    //them vao cong viec hoan thanh
    addTaskCompleted(name) {
        this.tasks = [...this.listTask]
        this.tasks2 = this.tasks.filter((task) => task.name === name)
        this.listTaskCompleted = [...this.tasks2, ...this.listTaskCompleted]
    }

    addTaskListFromCompleted(name) {
        this.tasks1 = [...this.listTaskCompleted]
        this.tasks3 = this.tasks1.filter((task) => task.name === name)
        this.listTask = [...this.tasks3, ...this.listTask]
    }



}