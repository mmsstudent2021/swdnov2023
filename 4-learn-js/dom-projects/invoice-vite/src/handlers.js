import { productSidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
  productSidebar.classList.remove("translate-x-full");
  productSidebar.classList.add("duration-300");
};

export const closeSidebarBtnHandler = () => {
  productSidebar.classList.add("translate-x-full");
};

export const checkoutHandler = () => {
  console.log("U checkout");
  window.print();
};
