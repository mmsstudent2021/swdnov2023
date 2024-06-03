// selectors

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");
const deleteAll = document.querySelector("#deleteAll");
const doneAll = document.querySelector("#doneAll");
const listTemplate = document.querySelector("#listTemplate");
// let count = 1;

// actions ( Business logic )

const updateTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

const updateDoneTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

// create new list
const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  console.log(list);
  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".list-task").innerText = currentTask;

  // const list = document.createElement("div");
  // // list.id = "list" + count++;
  // list.id = "list" + Date.now();

  // list.classList.add("list");

  // list.innerHTML = `

  //   `;

  // const listDoneCheck = list.querySelector(".list-done-check");
  // const listTask = list.querySelector(".list-task");
  // const listEditBtn = list.querySelector(".list-edit-btn");
  // const listDelBtn = list.querySelector(".list-del-btn");

  // listDoneCheck.addEventListener("change", () => {
  //   // console.log(currentTask, " is done");
  //   updateDoneTaskTotal();
  //   listTask.classList.toggle("line-through");
  //   list.classList.add("duration-200");
  //   list.classList.toggle("opacity-20");
  //   list.classList.toggle("scale-90");
  //   if (listDoneCheck.checked) {
  //     listEditBtn.setAttribute("disabled", true);
  //   } else {
  //     listEditBtn.removeAttribute("disabled");
  //   }
  // });

  // listDelBtn.addEventListener("click", () => {
  //   if (window.confirm("Are you sure to delete ?")) {
  //     list.remove();
  //   }
  // });

  // listEditBtn.addEventListener("click", () => {
  //   listEditBtn.setAttribute("disabled", true);
  //   listDoneCheck.setAttribute("disabled", true);
  //   const currentTask = listTask.innerText;
  //   const newTaskInput = document.createElement("input");
  //   newTaskInput.className =
  //     "border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none ";
  //   newTaskInput.value = currentTask;
  //   listTask.after(newTaskInput);
  //   newTaskInput.focus();
  //   listTask.classList.add("hidden");

  //   newTaskInput.addEventListener("blur", () => {
  //     listEditBtn.removeAttribute("disabled");
  //     listDoneCheck.removeAttribute("disabled");

  //     console.log("edit finish");
  //     listTask.innerText = newTaskInput.value;
  //     listTask.classList.remove("hidden");
  //     newTaskInput.remove();
  //   });
  // });

  return list;
};

const deleteList = (listId) => {
  console.log("U del");
  const currentList = document.querySelector(`#${listId}`);
  // console.log(currentList);
  if (window.confirm("Are you sure to delete ?")) {
    currentList.classList.add("animate__animated", "animate__hinge");
    currentList.addEventListener("animationend", () => {
      currentList.remove();
      updateDoneTaskTotal();
      updateTaskTotal();
    });
  }
};

const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");

  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none ";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");

    console.log("edit finish");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });

  newTaskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");

      console.log("edit finish");
      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
    }
  });
};

const updateList = () => {};

const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");

  listTask.classList.toggle("line-through");
  currentList.classList.add("duration-200");
  currentList.classList.toggle("opacity-20");
  currentList.classList.toggle("scale-90");
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
  updateDoneTaskTotal();
};
const addList = (text) => {
  // console.log(taskInput.value);
  listGroup.append(createNewList(text));
  taskInput.value = null;
  updateTaskTotal();
};

// Application Logic

// handler
const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

const addTaskBtnHandler = () => {
  // console.log(taskInput.value.trim() ? true : false);
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("U must input task");
  }
};

const taskInputHandler = (event) => {
  // console.clear();
  // console.log(event);
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addList(taskInput.value);
    } else {
      alert("U must input task");
    }
  }
};

const deleteAllHandler = () => {
  if (confirm("Are you sure to remove all lists ?")) {
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => list.remove());
  }
};

const doneAllHandler = () => {
  if (confirm("Are you sure to done all lists ?")) {
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    });
  }
};

// listener
addTaskBtn.addEventListener("click", addTaskBtnHandler);
taskInput.addEventListener("keyup", taskInputHandler);
listGroup.addEventListener("click", listGroupHandler);
deleteAll.addEventListener("click", deleteAllHandler);
doneAll.addEventListener("click", doneAllHandler);

// const run = (x, y) => {
//   return x + y;
// };

// console.dir(run.bind(null, 5, 4).apply());

// DOM Node
// const myName = document.createTextNode("Hein Htet Zan");
// document.body.append(myName);
// console.dir(myName);
// const myAge = document.createTextNode(20);
// const myJob = document.createTextNode("Software Engineer");

// const mySelf = document.createDocumentFragment();
// console.log(mySelf);

// mySelf.append(myName);
// mySelf.append(myAge);
// mySelf.append(myJob);

// console.log(mySelf);
// document.body.append(mySelf);
// console.log(document.body.childNodes);
// console.log(document.body.children);

// console.log(deleteAll.childNodes[2]);
// deleteAll.childNodes[2].nodeValue = "Ha Ha";

// ES 6 Module
// Vite ( Module Bundler )
