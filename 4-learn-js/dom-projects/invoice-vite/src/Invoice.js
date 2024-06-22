import initialRender from "./initialRender";
import listener from "./listener";
import observer from "./observer";
import { productSidebar } from "./selectors";

class Invoice {
  init() {
    console.log("Invoice App Start");
    observer();
    initialRender();
    listener();
  }
}

export default Invoice;
