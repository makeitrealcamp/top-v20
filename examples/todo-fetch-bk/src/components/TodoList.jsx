/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import { getTasks } from '../services/task';

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);


  const onToggleTodo = (id) => {

  };

  const onDeleteTodo = (id) => {

  };

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTasks();
      setTodos(todos);
    }
    fetchTodos();
  }, []);


  return (
    <div className="Todo-List">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            {...todo}
          />
        ))}
      </ul>
    </div>
  );
};

/**
 * Typechecking props
 */
TodoList.propTypes = {
  filter: PropTypes.string,
};

TodoList.defaultProps = {
  filter: null,
};

export default TodoList;
