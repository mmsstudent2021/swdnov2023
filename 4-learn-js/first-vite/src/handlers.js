import Swal from "sweetalert2";
import { listGroup, taskInput } from "./selectors";

export const addBtnHandler = () => {
  console.log("U click add btn");
  console.log(taskInput.value);
  const list = document.createElement("li");
  list.innerText = taskInput.value;
  listGroup.append(list);
  taskInput.value = "";
};

export const alertTestBtnHandler = () => {
  console.log("alertTestBtn");
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
  //   Swal.fire({
  //     title: "hello",
  //     text: "san kyi tar",
  //     icon: "error",
  //   });
  //   Swal.fire("hello hello", "san kyi tar", "warning");
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     // confirmButtonColor: "#3085d6",
  //     // cancelButtonColor: "#d33",
  //     // confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log("u selected true");
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success",
  //       });
  //     } else {
  //       console.log("u selected false");
  //     }
  //   });
};
