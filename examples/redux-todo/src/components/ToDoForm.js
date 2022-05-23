import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from '../store/actions';

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const toDoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: toDoList.length + 1, task: userInput, complete: false };

    dispatch(addTodo(newTodo));
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoForm;
