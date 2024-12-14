"use server";
import React from "react";
import DeleteForm from "./DeleteForm";

const TaskList = ({ task: { id, title, is_done, create_at } }) => {
  return (
    <div className=" border border-black p-3 flex justify-between items-center mb-3">
      <h1>{title}</h1>
      <DeleteForm id={id} />
    </div>
  );
};

export default TaskList;
