// selectors

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");

// process
const addList = () => {
  // console.log(taskInput.value);
  listGroup.append(createNewList(taskInput.value));
  taskInput.value = null;
  updateTaskTotal();
};

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
  const list = document.createElement("div");
  list.classList.add("list");

  list.innerHTML = `
    <div class="border border-stone-950 p-3 flex justify-between mb-3">
        <div class="flex gap-3 items-center">
        <input type="checkbox" class="list-done-check accent-stone-950" />
        <p class="font-mono list-task">${currentTask}</p>
        </div>
        <div class="control">
        <button class="border list-edit-btn border-stone-950 disabled:opacity-20 p-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
            </svg>
        </button>
        <button class="list-del-btn border border-stone-950 p-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
            </svg>
        </button>
        </div>
    </div>

    `;

  const listDoneCheck = list.querySelector(".list-done-check");
  const listTask = list.querySelector(".list-task");
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listDelBtn = list.querySelector(".list-del-btn");

  listDoneCheck.addEventListener("change", () => {
    // console.log(currentTask, " is done");
    updateDoneTaskTotal();
    listTask.classList.toggle("line-through");
    list.classList.add("duration-200");
    list.classList.toggle("opacity-20");
    list.classList.toggle("scale-90");
    if (listDoneCheck.checked) {
      listEditBtn.setAttribute("disabled", true);
    } else {
      listEditBtn.removeAttribute("disabled");
    }
  });

  listDelBtn.addEventListener("click", () => {
    if (window.confirm("Are you sure to delete ?")) {
      list.remove();
    }
  });

  listEditBtn.addEventListener("click", () => {
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
  });

  return list;
};

// event
addTaskBtn.addEventListener("click", addList);
