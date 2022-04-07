import {
  INCREMENT,
  SET_INTERVAL,
  INCREASE_COUNT,
  DECREASE_COUNT,
  RESTART,
} from './types'

export const increment = (isIncrement) => ({ type: INCREMENT, increment: isIncrement })
export const setMyInterval = (countInterval) => ({ type: SET_INTERVAL, countInterval })
export const increaseCount = () => ({ type: INCREASE_COUNT })
export const decreaseCount = () => ({ type: DECREASE_COUNT })
export const restart = () => ({ type: RESTART })
