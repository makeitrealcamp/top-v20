import { useDispatch } from 'react-redux'

import { multiplicar } from '../store/actions';

const ButtonMultiplicar = () => {
  const dispatch = useDispatch();

  const handleMultiplicar = () => {
    dispatch(multiplicar());
  }

  return(
    <button type='button' onClick={handleMultiplicar}>
      x 2
    </button>
  )
}

export default ButtonMultiplicar
