import {
  INCREMENT,
  SET_INTERVAL,
  INCREASE_COUNT,
  DECREASE_COUNT,
  RESTART,
} from './types'

export const initialState = {
  count: 0,
  countInterval: 1,
  increment: true,
}

function reducer(state, action){
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        increment: action.increment
       }
    case SET_INTERVAL:
      return {
          ...state,
          countInterval: parseInt(action.countInterval)
        }
    case INCREASE_COUNT:
      return {
          ...state,
          count: state.count + state.countInterval
        }
    case DECREASE_COUNT:
      return {
          ...state,
          count: state.count - state.countInterval
        }
    case RESTART:
      return initialState;
    default:
      throw new Error()
  }
}

export default reducer
