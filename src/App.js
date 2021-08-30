import { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return 8;
  });
  //Decrement count
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  //Increment count
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="container">
      <h1>Decrement and Increment the Number</h1>
      <div>
        <button onClick={decrementCount} className="btn">
          -
        </button>
        <span>{count}</span>
        <button onClick={incrementCount} className="btn">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
