const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    completed: true,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    completed: false,
  },
]

function getAllTask() {
  return tasks;
}

function getOneTask(id) {
  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    return null;
  }

  return task;
}

function deleteTask(id) {
  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    return null;
  }

  tasks.splice(tasks.indexOf(task), 1);

  return task;
}

function createTask(task) {
  task.id = tasks.length + 1;
  task.completed = false;

  tasks.push(task);

  return task;
}

function updateTask(id, task) {
  const oldTask = tasks.find(task => task.id === Number(id));

  if (!oldTask) {
    return null;
  }

  tasks.forEach(oldTask => {
    if (oldTask.id === Number(id)) {
      oldTask.title = task.title;
      oldTask.description = task.description;
      oldTask.completed = task.completed;
    }
  });

  return task;
}

module.exports = {
  getAllTask,
  getOneTask,
  deleteTask,
  createTask,
  updateTask,
}
