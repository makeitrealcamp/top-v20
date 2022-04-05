import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p role="contentinfo">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
}

export default Counter;
