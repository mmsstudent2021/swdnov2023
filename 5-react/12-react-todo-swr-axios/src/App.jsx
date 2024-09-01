import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import useSWR, { useSWRConfig } from "swr";
import Task from "./components/Task";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  // app state
  // const [tasks, setTask] = useState([]);

  console.log(import.meta.env.VITE_BASE_URL);

  const { data, error, isLoading } = useSWR(
    // "http://localhost:5000/tasks",
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    fetcher
  );

  const { mutate } = useSWRConfig();

  // if (isLoading === true) {
  //   return "Loading";
  // }

  const todoApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/tasks`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const addTask = async (newTask) => {
    // server changes
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });

    // const data = await res.json();

    // await axios.post("http://localhost:5000/tasks", newTask, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await todoApi.post("/", newTask);

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

    // revalidation

    // setTask([...tasks, newTask]);
  };

  const removeTask = async (id) => {
    // await axios.delete(`http://localhost:5000/tasks/${id}`);

    await todoApi.delete(`/${id}`);

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    // mutate("http://localhost:5000/tasks");

    // setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    // await axios.patch(
    //   `http://localhost:5000/tasks/${id}`,
    //   {
    //     isDone: !currentState,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    await todoApi.patch(`/${id}`, { isDone: !currentState });

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ isDone: !currentState }),
    // });

    // mutate("http://localhost:5000/tasks");

    // setTask(
    //   tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    // );
  };

  return (
    <div className=" p-10">
      <Heading />
      <CreateTask addTask={addTask} />

      {isLoading ? (
        "loading ..."
      ) : (
        <div>
          <h3 className=" font-bold font-serif text-xl mb-3">
            Task List (Total {data.length}, Done{" "}
            {data.filter((el) => el.isDone).length})
          </h3>
          {data.map((el) => (
            <Task
              doneTask={doneTask}
              removeTask={removeTask}
              key={el.id}
              job={el}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
