import { useAppContext } from '../store';

const CompA = () => {
  const {state} = useAppContext()

  return (
    <h1>
      <p>Count is {state.count}</p>
    </h1>
  )
}

export default CompA
