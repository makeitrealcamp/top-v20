const express = require('express');

const app = express();

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

// RUTAS
// wwww.example.com/api/

// RESTFUL API
// www.example.com/api/tasks/10\
// get tasks/10 -> obtener un solo recurso
// get tasks/ -> obtener todos los recursos
// post tasks/ -> crear un recurso
// put tasks/10 -> reemplaza todo el recurso indetificado con los datos de solicitud
// patch tasks/10 -> reemplaza una parte del recurso identificado con los datos de solicitud


// GET RAIZ
app.get('/', (request, res) => {
  res.send('<h1>Hello World!</h1>');
});

// GET API/TASKS
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
})

app.get('/api/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    res.status(404).json({ message: `Task not found with id: ${id}` });
  } else {
    res.json(task);
  }

})


const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Server running at http://localhost:${port}/`);
