const myName = "hein htet zan";
const app = document.querySelector("#app");

const showMyName = function (name) {
  app.innerText = name;
  console.log(name);
};

showMyName(myName);
