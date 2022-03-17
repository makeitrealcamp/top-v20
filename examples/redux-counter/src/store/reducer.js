
const initialState = {
  count: 0,
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + action.payload
      }
    case 'REMOVE':
      return {
        ...state,
        count: state.count - 1
      }
    case 'MULTIPLICAR':
        return {
          ...state,
          count: state.count * 2
        }
    default:
      return state;
  }
}

export default reducer;

