const heading = document.querySelector("#heading");
const textInput = document.querySelector("#textInput");
const nationSelect = document.querySelector("#nationSelect");
const clickMeBtn = document.querySelector("#clickMeBtn");
const addForm = document.querySelector("#addForm");
const img = document.querySelector("#img");
const link = document.querySelector("#link");
const greeting = document.querySelector("#greeting");
const removeShowClick = document.querySelector("#removeShowClick");

const aa = document.querySelector("#aa");
const bb = document.querySelector("#bb");
const cc = document.querySelector("#cc");
const dd = document.querySelector("#dd");
const playground = document.querySelector("#playground");

const lists = document.querySelectorAll(".list");
const listGroup = document.querySelector("#listGroup");

listGroup.addEventListener("click", (event) => {
  console.log(event.target);
});

// lists.forEach((list) => {
//   list.addEventListener("click", () => {
//     console.log(list.innerText);
//   });
// });

// const events = ["click", "mouseover", "mouseout","mousemove"];

// events.forEach((event) => {
//   playground.addEventListener(event, () => {
//     console.log("U ", event);
//   });
// });

aa.addEventListener(
  "click",
  () => {
    console.log("U click aa");
  },
  false
);

bb.addEventListener(
  "click",
  () => {
    console.log("U click bb");
  },
  false
);

cc.addEventListener(
  "click",
  () => {
    console.log("U click cc");
  },
  false
);

dd.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    console.log("U click dd");
  },
  false
);

// const showClick = () => {
//   console.log("U click");
// };

// greeting.addEventListener("click", showClick);

// removeShowClick.addEventListener("click", () => {
//   greeting.removeEventListener("click", showClick);
// });

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("hello Hello");
//   console.log(event);
//   console.log(this);
//   console.log(link.innerHTML);
// });

// document.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// document.addEventListener("click", (event) => {
//   console.log(event);
// });

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("U submit");
});

clickMeBtn.addEventListener("click", () => {
  console.log("U click");
});

// console.dir(heading);

const handleClick = () => {
  console.log("U Click");
};

const handleMouseOver = () => {
  console.log("U MouseOver");
};

const handleMouseOut = () => {
  console.log("U MouseOut");
};

const handleMouseMove = (event) => {
  console.clear();
  console.log("U MouseMove");
  //   console.log(event);
};

// // heading.onclick = handleClick;

// heading.addEventListener("mouseover", handleMouseOver);
// heading.addEventListener("mouseout", handleMouseOut);
// heading.addEventListener("click", handleClick);
// heading.addEventListener("mousemove", handleMouseMove);

const handleKeyup = () => {
  console.log("U Keyup");
};

const handlekeypress = () => {
  console.log("U keypress");
};

const handleKeydown = () => {
  console.log("U Keydown");
};

const handleFocus = () => {
  console.log("U Focus");
};

const handleBlur = () => {
  console.log("U Blur");
};

const handleChange = () => {
  console.log("U Change");
};

// textInput.addEventListener("keyup", handleKeyup);
// textInput.addEventListener("keypress", handlekeypress);
// textInput.addEventListener("keydown", handleKeydown);
// textInput.addEventListener("focus", handleFocus);
// textInput.addEventListener("blur", handleBlur);
// textInput.addEventListener("change", handleChange);

// document.addEventListener("keyup", handleKeyup);

// nationSelect.addEventListener("change", () => {
//   console.log("U change nation", nationSelect.value);
// });

// window.addEventListener("load", () => {
//   console.log("loading finish");
// });

// console.log("hello");
// let x = 0;
// for (let i = 1; i < 9999999; i++) {
//   x += i;
// }
// console.log(x);

// console.log("san");
// console.log("kyi");
// console.log("tar");

// img.addEventListener("load", () => {
//   console.log("image loaded");
// });

// window.addEventListener("scroll", () => {
//   console.log("U scroll");
// });
