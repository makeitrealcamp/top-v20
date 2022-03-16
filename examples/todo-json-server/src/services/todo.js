const API_URL = 'http://localhost:8080/api'

// HTTP GET
export async function getAllTodos() {
  try {
    const response = await fetch(`${API_URL}/todos`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error);
  }
}

// HTTP POST
export async function createTodo(todo) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  }

  try {
    const response = await fetch(`${API_URL}/todos`, payload)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateTodo(todo) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  }

  try {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, payload)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error);
  }
}
