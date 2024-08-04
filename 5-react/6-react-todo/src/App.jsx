import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    "Complete JavaScript assignment",
    "Prepare for meeting with client",
    "Update project documentation",
    "Review code for new feature",
    "Plan team-building activity",
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    setTask(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className=" p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
