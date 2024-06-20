import { productRender } from "./inventory";
import { products } from "./states";

const initialRender = () => {
  // open product sidebar
  //   productSidebar.classList.remove("translate-x-full");
  productRender(products);
};

export default initialRender;
