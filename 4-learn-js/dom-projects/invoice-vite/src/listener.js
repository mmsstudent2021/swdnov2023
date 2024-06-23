import {
  checkoutHandler,
  closeSidebarBtnHandler,
  manageInventoryBtnHandler,
} from "./handlers";
import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import {
  addNewProductBtn,
  checkout,
  closeSidebarBtn,
  createRecordForm,
  manageInventoryBtn,
  recordGroup,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSidebarBtn.addEventListener("click", closeSidebarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkout.addEventListener("click", checkoutHandler);
};

export default listener;
