import { useReducer } from 'react'

const initialState = {
  count: 0,
  countInterval: 1,
  increment: true,
}

function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        increment: action.increment
       }
    case 'SET_INTERVAL':
      return {
          ...state,
          countInterval: parseInt(action.countInterval)
        }
    case 'INCREASE_COUNT':
      return {
          ...state,
          count: state.count + state.countInterval
        }
    case 'DECREASE_COUNT':
      return {
          ...state,
          count: state.count - state.countInterval
        }
    case 'RESTART':
      return initialState;
    default:
      throw new Error()
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncrement = (e) => {
    const { checked } = e.target
    dispatch({ type: 'INCREMENT', increment: checked })
  }

  const handleCountInterval = (e) => {
    const { value } = e.target
    dispatch({ type: 'SET_INTERVAL', countInterval: value })
  }

  const handleCount = () => {
    if (state.increment) {
      dispatch({ type: 'INCREASE_COUNT' })
    } else {
      dispatch({ type: 'DECREASE_COUNT' })
    }
  }

  const handleRestart = () => {
    dispatch({ type: 'RESTART' })
  }

  return(
    <div>
      <p>Count is {state.count}</p>
      <label htmlFor="chk">Incrementar:</label>
      <input type="checkbox" name="incrementar" id="chk" onChange={handleIncrement} />

      <br />

      <label htmlFor="interval">Intervalo:</label>
      <input type="number" name="interval" id="interval" onChange={handleCountInterval} />

      <br />
      <button onClick={handleCount}>
        {state.increment ? 'Incrementar' : 'Decrementar'}
      </button>
      <br />
      <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default Count
