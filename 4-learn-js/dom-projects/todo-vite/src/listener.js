import {
  addTaskBtnHandler,
  deleteAllHandler,
  doneAllHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handlers.js";
import {
  addTaskBtn,
  deleteAll,
  doneAll,
  listGroup,
  taskInput,
} from "./selectors.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
  deleteAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};

export default listener;
