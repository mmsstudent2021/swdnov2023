import React, { useState } from "react";

const ShowMyName = () => {
  const [name, setName] = useState("");

  const handleHein = () => {
    setName(name + "Hein");
  };

  const handleHtet = () => {
    setName(name + "Htet");
  };

  const handleZan = () => {
    setName(name + "Zan");
  };

  const handleClear = () => {
    setName("");
  };
  return (
    <div className=" p-10">
      <h1 className="text-4xl font-bold mb-3">My Name is "{name}"</h1>
      <button
        onClick={handleHein}
        className=" border px-4 py-2 bg-black text-white"
      >
        Hein
      </button>
      <button
        onClick={handleHtet}
        className=" border px-4 py-2 bg-black text-white"
      >
        Htet
      </button>
      <button
        onClick={handleZan}
        className=" border px-4 py-2 bg-black text-white"
      >
        Zan
      </button>

      <button
        onClick={handleClear}
        className=" border px-4 py-2  border-black "
      >
        Clear Name
      </button>
    </div>
  );
};

export default ShowMyName;
