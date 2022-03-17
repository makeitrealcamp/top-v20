import { useDispatch } from 'react-redux'

import { remove } from '../store/actions';

const ButtonRemove = () => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove());
  }

  return(
    <button type='button' onClick={handleRemove}>
      -1
    </button>
  )
}

export default ButtonRemove
