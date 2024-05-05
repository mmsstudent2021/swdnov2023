// console.log(window);
// console.log(document);
// console.log(console);

// console.log("hhz");
// console.log("min gal lar par");
// console.log("hello", "par", "kwar");

// 5 + 7

// const x = window.prompt("Input first number");
// const y = window.prompt("Input Second Number");

// console.log(typeof x);
// console.log(typeof y);

// const result = parseFloat(x) + parseFloat(y);

// console.log(result);

// window.alert(`Your result is ${result}`);

// How old are you ?
// answer your birth year

// const age = window.prompt("How old are you?");

// const birthYear = 2024 - parseInt(age);

// window.alert(`You was born in ${birthYear}`);

// const answer = window.confirm("Are you finish dinner ?");
// console.log(answer ? "Yes I finish" : "No, not yet");

// 1. select an element

const heading = document.getElementById("heading");
const textInput = document.getElementById("textInput");
const btn = document.getElementById("btn");
const listGroup = document.getElementById("listGroup");

// change title

// 2. set
function changeTitle() {
  heading.innerText = textInput.value;

  // 3. clear
  textInput.value = "";
}

// 4. event listen
// btn.onclick = changeTitle;
// btn.addEventListener("click", changeTitle);

// btn.ondblclick = function () {
//   console.log("U click");
// };

// console.log(heading.innerText);
// console.dir(textInput);
// console.dir(listGroup);
// console.log(listGroup.innerHTML);
// console.log(listGroup.innerText);

// console.dir(heading);
// console.log(heading.innerHTML);
// console.log(heading.innerText);

// console.dir(btn);
// console.log(btn.innerHTML);
// console.log(btn.innerText);
// console.log(textInput);
// console.log(btn);

// const obj = {
//   a: "aaa",
//   b: "bbb",
// };

// console.log(obj);

// obj.a = "xxx";
// obj.b = "yyy";
// obj.c = "zzz";

// console.log(obj);
