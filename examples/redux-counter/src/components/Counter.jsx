import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);

  return(
    <div>
      Counter: {count}
    </div>
  )
}

export default Counter
