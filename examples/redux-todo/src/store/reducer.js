
const initialState = {
  todos: [],
}

/**
 * Reducer for the todo store
 * @param {Object} state Representa el estado anterior del reducer
 * @param {Object} action El objeto que contiene la acción que se desea ejecutar
 */
function todoApp(state = initialState, action){
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      }
    case 'COMPLETE_TASK':
      return{
        ...state,
        todos: action.payload
      }

    default:
      return state;
  }

}

export default todoApp;
