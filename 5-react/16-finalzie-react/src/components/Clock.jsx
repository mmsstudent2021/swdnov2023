import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  console.log("Clock Render");

  // Format time to HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  const clockRunner = () => {
    const currentTime = new Date();
    console.log(currentTime);
    setTime(currentTime);
  };

  useEffect(() => {
    console.log("Clock Mounted");

    const runningClock = setInterval(clockRunner, 1000);

    return () => {
      clearInterval(runningClock);
      console.log("Clock UnMounted");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600">{formattedTime}</h1>
      <p className="mt-4 text-gray-700">Digital Clock</p>
    </div>
  );
};

export default Clock;
