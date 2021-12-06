import { useState } from 'react'

// hook -> gancho -> tudo que começa com Use

export function Counter() {
  const [counter, setCounter] = useState(0);
  
  function increment() {
   setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}