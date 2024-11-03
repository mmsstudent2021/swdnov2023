import React, { Profiler, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  // app state
  const [tasks, setTask] = useState([
    { id: 1, task: "Complete JavaScript assignment", isDone: false },
    { id: 2, task: "Prepare for meeting with client", isDone: false },
    { id: 3, task: "Update project documentation", isDone: true },
    { id: 4, task: "Review code for new feature", isDone: false },
    { id: 5, task: "Plan team-building activity", isDone: true },
    // { id: 6, task: "Write blog post", isDone: false },
    // { id: 7, task: "Prepare demo presentation", isDone: true },
    // { id: 8, task: "Complete React assignment", isDone: false },
    // { id: 9, task: "Review code for new feature", isDone: false },
    // { id: 10, task: "Plan team-building activity", isDone: true },
    // { id: 11, task: "Write blog post", isDone: false },
    // { id: 12, task: "Prepare demo presentation", isDone: true },
    // { id: 13, task: "Complete JavaScript assignment", isDone: false },
    // { id: 14, task: "Prepare for meeting with client", isDone: false },
    // { id: 15, task: "Update project documentation", isDone: true },
    // { id: 16, task: "Review code for new feature", isDone: false },
    // { id: 17, task: "Plan team-building activity", isDone: true },
    // { id: 18, task: "Write blog post", isDone: false },
    // { id: 19, task: "Prepare demo presentation", isDone: true },
    // { id: 20, task: "Complete React assignment", isDone: false },
    // { id: 21, task: "Review code for new feature", isDone: false },
    // { id: 22, task: "Plan team-building activity", isDone: true },
    // { id: 23, task: "Write blog post", isDone: false },
    // { id: 24, task: "Prepare demo presentation", isDone: true },
    // { id: 25, task: "Complete JavaScript assignment", isDone: false },
    // { id: 26, task: "Prepare for meeting with client", isDone: false },
    // { id: 27, task: "Update project documentation", isDone: true },
    // { id: 28, task: "Review code for new feature", isDone: false },
    // { id: 29, task: "Plan team-building activity", isDone: true },
    // { id: 30, task: "Write blog post", isDone: false },
    // { id: 31, task: "Prepare demo presentation", isDone: true },
    // { id: 32, task: "Complete React assignment", isDone: false },
    // { id: 33, task: "Review code for new feature", isDone: false },
    // { id: 34, task: "Plan team-building activity", isDone: true },
    // { id: 35, task: "Write blog post", isDone: false },
    // { id: 36, task: "Prepare demo presentation", isDone: true },
    // { id: 37, task: "Complete JavaScript assignment", isDone: false },
    // { id: 38, task: "Prepare for meeting with client", isDone: false },
    // { id: 39, task: "Update project documentation", isDone: true },
    // { id: 40, task: "Review code for new feature", isDone: false },
    // { id: 41, task: "Plan team-building activity", isDone: true },
    // { id: 42, task: "Write blog post", isDone: false },
    // { id: 43, task: "Prepare demo presentation", isDone: true },
    // { id: 44, task: "Complete React assignment", isDone: false },
    // { id: 45, task: "Review code for new feature", isDone: false },
    // { id: 46, task: "Plan team-building activity", isDone: true },
    // { id: 47, task: "Write blog post", isDone: false },
    // { id: 48, task: "Prepare demo presentation", isDone: true },
    // { id: 49, task: "Complete JavaScript assignment", isDone: false },
    // { id: 50, task: "Prepare for meeting with client", isDone: false },
    // { id: 51, task: "Update project documentation", isDone: true },
    // { id: 52, task: "Review code for new feature", isDone: false },
    // { id: 53, task: "Plan team-building activity", isDone: true },
    // { id: 54, task: "Write blog post", isDone: false },
    // { id: 55, task: "Prepare demo presentation", isDone: true },
  ]);

  console.log("App component render")

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  };

  return (
    <div className=" p-10">
      <Profiler id="App" onRender={onRender}>
        <Heading />
        <CreateTask addTask={addTask} />
        <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
      </Profiler>
    </div>
  );
};

export default App;
