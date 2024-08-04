import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <h3 className=" font-bold font-serif text-xl mb-3">
        Task List (Total {tasks.length}, Done {0})
      </h3>
      {tasks.map((el) => (
        <Task removeTask={removeTask} key={el} job={el} />
      ))}
    </div>
  );
};

export default TaskList;
