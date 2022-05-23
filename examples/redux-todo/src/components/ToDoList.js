import { useSelector, useDispatch } from 'react-redux';

import { completeTask } from '../store/actions';

import ToDo from "./ToDo";

const ToDoList = ({  handleFilter }) => {
  const toDoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (todo) => {
    const todoListUpdated = toDoList.map((item) => {
      if (item.id === todo.id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }

      return item;
    })

    dispatch(completeTask(todoListUpdated));
  }

  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;

// Redux
// Provider
// Store
// Reducers
// Actions
