import React, { memo } from "react";

const CounterView = memo(function CounterView({ count }) {
  console.log("CounterView Render");
  return <h1 className="text-4xl font-bold mb-8">Counter: {count}</h1>;
});

export default CounterView;
