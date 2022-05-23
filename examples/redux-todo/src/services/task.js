const BASE_URL = 'http://localhost:8080';

export async function getTasks () {
  try {
    const resp = await fetch(`${BASE_URL}/api/tasks`)
    const tasks = await resp.json()
    return tasks
  } catch (error) {
    console.log(error)
  }
}


export async function getTask (id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/tasks/${id}`)
    const task = await resp.json()
    return task
  } catch (error) {
    console.log(error)
  }
}

export async function createTask(task) {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(task)
    }

    const resp = await fetch(`${BASE_URL}/api/tasks`, payload)
    const newTask = await resp.json()
    return newTask
  } catch (error) {
    console.log(error)
  }
}


export async function udpateTask(task) {
  try {
    const payload = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }

    const resp = await fetch(`${BASE_URL}/api/tasks/${task._id}`, payload)
    const newTask = await resp.json()
    return newTask
  } catch (error) {
    console.log(error)
  }
}
