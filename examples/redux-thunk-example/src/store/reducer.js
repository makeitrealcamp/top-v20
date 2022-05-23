import  {
  SET_POSTS,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
  GET_SINGLE_POST,
  TOGGLE_LIST,
} from './types';

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  showList: true
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        // isLoading: false,
        // isError: false,
        posts: action.payload
      }

    case ADD_POST:
      debugger
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }

    case TOGGLE_LIST:
      return {
        ...state,
        showList: !state.showList
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }

    default:
      return state
  }
}

export default reducer
