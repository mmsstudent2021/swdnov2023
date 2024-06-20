import { productSidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
  productSidebar.classList.remove("translate-x-full");
  productSidebar.classList.add("duration-300");
};

export const closeSidebarBtnHandler = () => {
  console.log(productSidebar.classList.add("translate-x-full"));
};

