import React, { useMemo, useState } from "react";
import CounterView from "./components/CounterView";

function Counter() {
  console.log("App Render");

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const doubleToCount = useMemo(() => {
    console.log("Double to count");
    return count * 2;
  }, [count]);

  const handleBoxToggle = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <CounterView count={doubleToCount} />
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={handleBoxToggle}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Toggle
        </button>

        {show && (
          <div className="w-32 h-32 bg-gray-200 rounded">Box is here</div>
        )}
      </div>
    </div>
  );
}

export default Counter;
