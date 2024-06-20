import { closeSidebarBtnHandler, manageInventoryBtnHandler } from "./handlers";
import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler } from "./record";
import {
  addNewProductBtn,
  closeSidebarBtn,
  createRecordForm,
  manageInventoryBtn,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSidebarBtn.addEventListener("click", closeSidebarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
};

export default listener;
