import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import Clock from "./components/Clock";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" p-10">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 mb-10 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Toggle Table
      </button>
      {show && <ProductTable />}
    </div>
  );
};

export default App;
