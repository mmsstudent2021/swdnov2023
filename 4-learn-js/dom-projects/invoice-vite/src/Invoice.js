import initialRender from "./initialRender";
import listener from "./listener";
import { productSidebar } from "./selectors";

class Invoice {
  init() {
    console.log("Invoice App Start");
    initialRender();
    listener();
  }
}

export default Invoice;
