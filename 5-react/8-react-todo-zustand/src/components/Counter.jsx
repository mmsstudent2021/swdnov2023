import React, { useState } from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
  //   const [count, setCount] = useState(7);

  const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();

  // console.log(useCounterStore());

  const handleReset = () => {
    // setCount(0);
    resetCount();
  };

  const handleIncrement = () => {
    // setCount(count + 1);
    increaseCount(5);
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    decreaseCount();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Counter</h1>
        <div className="flex justify-center items-center space-x-6 mb-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600"
          >
            -
          </button>
          <span className="text-6xl font-semibold">{count}</span>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600"
          >
            +
          </button>
        </div>
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
