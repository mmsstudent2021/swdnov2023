import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";
// import Counter from "./components/Counter";

const App = () => {
  // app state

  return (
    // <TaskProvider>
      <div className=" p-10">
        <Heading />
        <CreateTask />
        <TaskList />
      </div>
    // </TaskProvider>
    // <Counter />
  );
};

export default App;
