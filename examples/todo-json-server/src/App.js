import React, { useState, useEffect } from 'react';

//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';

import { getAllTodos, createTodo, updateTodo } from './services/todo'

import './App.css';

function App() {
  const [ listaTareas, setToDoList ] = useState([]);

  const fetchTodos =  async () => {
    const data = await getAllTodos()
    setToDoList(data)
  }

  const handleToggle = async (id) => {
    const todoToUpdate = listaTareas.find(todo => todo.id === id)
    todoToUpdate.complete = !todoToUpdate.complete

    await updateTodo(todoToUpdate)
    fetchTodos()
  }

  const handleFilter = () => {
    let filtered = listaTareas.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = async (userInput ) => {
    const task = { task: userInput, complete: false }

    const created = await createTodo(task)
    setToDoList([...listaTareas, created])
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="App-header">
      <Header />
      <ToDoList toDoList={listaTareas} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
