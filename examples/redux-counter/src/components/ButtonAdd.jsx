import { useDispatch } from 'react-redux'

import { add } from '../store/actions';

const ButtonAdd = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(10));
  }

  return(
    <button type='button' onClick={handleAdd}>
      +10
    </button>
  )
}

export default ButtonAdd
