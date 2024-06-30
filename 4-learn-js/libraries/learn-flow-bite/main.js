import "./style.css";
import "./node_modules/venobox/dist/venobox";
import { Modal } from "flowbite";
// import "./node_modules/flowbite/dist/flowbite";
import Typed from "typed.js";
import Chart from "chart.js/auto";

const myChart = new Chart(document.querySelector("#myChart"), {
  type: "line",
  data: {
    labels: ["a", "b", "c", "d", "e", "f"],
    datasets: [
      {
        label: "my value for April",
        data: [4, 5, 2, 7, 1, 9],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "my value for May",
        data: [4, 7, 1, 9, 5, 2],
        borderColor: "rgba(192, 192, 192, 1)",
        backgroundColor: "rgba(192, 192, 192, 0.2)",
      },
      {
        label: "my value for June",
        data: [5, 4, 7, 1, 9, 2],
      },
    ],
  },
});

new VenoBox({
  selector: ".aaa",
});

new VenoBox({
  selector: ".slide",
});

const typed = new Typed("#elements", {
  strings: ["the world’s potential", "MMSIT"],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
  loopCount: 2,
});

const typed2 = new Typed("#el2", {
  strings: ["business teams like yours", "MMSIT"],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
  loopCount: 2,
});

const watchMore = document.querySelector("#watchMore");
const heroModal = document.querySelector("#hero-modal");
// console.log(watchMore);
// options with default values
const options = {
  placement: "bottom-right",
  backdrop: "dynamic",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  closable: true,
  onHide: () => {
    console.log("modal is hidden");
  },
  onShow: () => {
    console.log("modal is shown");
  },
  onToggle: () => {
    console.log("modal has been toggled");
  },
};

// instance options object
const instanceOptions = {
  id: "modalEl",
  override: true,
};

// const modal = new Modal(heroModal, options, instanceOptions);

// const run = () => {
//   if (scrollY > 1100) {
//     modal.show();
//     document.removeEventListener("scroll", run);
//   }
//   // console.log(scrollY);
// };

// document.addEventListener("scroll", run);

// watchMore.addEventListener("click", () => {
//   console.log("u click");
//   modal.show();
// });
