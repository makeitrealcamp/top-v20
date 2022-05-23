import PropTypes from 'prop-types';

const TodoItem = ({ _id, title, completed, onToggleTodo, onDeleteTodo }) => (
  <li>
    <span className="delete-item">
      <button type="submit" onClick={() => onDeleteTodo(_id)}>
        X
      </button>
    </span>
    <input
      type="checkbox"
      className="toggle"
      checked={completed}
      onChange={() => onToggleTodo(_id)}
    />
    {title}
  </li>
);

/**
 * Typechecking props
 */
TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
