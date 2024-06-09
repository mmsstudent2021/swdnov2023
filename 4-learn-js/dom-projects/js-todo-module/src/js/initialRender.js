import { addList, tasks } from "./list.js";

const initialRender = () => {
  //   console.log("I'm pre render at app start");
  tasks.forEach((task) => addList(task));
};

export default initialRender;
