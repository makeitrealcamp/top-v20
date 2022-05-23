import { useAppContext } from '../store';
import {
  decreaseCount,
  increaseCount,
  increment,
  restart,
  setMyInterval,
} from '../store/actions';

const Count = () => {
  const {state, dispatch} = useAppContext()

  const handleIncrement = (e) => {
    const { checked } = e.target
    dispatch(increment(checked))
  }

  const handleCountInterval = (e) => {
    const { value } = e.target
    dispatch(setMyInterval(value))
  }

  const handleCount = () => {
    if (state.increment) {
      dispatch(increaseCount())
    } else {
      dispatch(decreaseCount())
    }
  }

  const handleRestart = () => {
    dispatch(restart())
  }

  return(
    <div>
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

