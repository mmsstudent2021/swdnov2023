import React from "react";

const Task = ({ job, removeTask }) => {
  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure to delete?")) {
      removeTask(job);
    }
  };
  return (
    <div className=" flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
      <p>{job}</p>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm bg-red-100 border-2 border-red-100  rounded-lg py-2 text-red-700 px-4"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
