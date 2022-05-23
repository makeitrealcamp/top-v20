/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
import { useEffect, useState } from 'react';

import { createTask } from '../services/task'

const TodoForm = () => {
  const [currentTodo, setCurrentTodo] = useState(null)

  const handleInputChange = (evt) => {
    const val = evt.target.value;
    setCurrentTodo(val);
  };

  const handleSubmit = async(evt) => {
    evt.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to create a task');
      return;
    }

    const taskToCreate = {
      title: currentTodo,
      description: 'same description',
    }

    await createTask(taskToCreate)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={currentTodo} />
    </form>
  );
};

export default TodoForm;
