const controlNav = document.querySelector("#controlNav");
const sideBar = document.querySelector("#sideBar");
const skillCount = document.querySelector("#skillCount");
const googleLink = document.querySelector("#googleLink");
const ytLink = document.querySelector("#ytLink");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const fileInput = document.querySelector("#fileInput");
const lists = document.querySelectorAll(".list");
const images = document.querySelectorAll(".img");

// get attribute
// console.log(googleLink.href);
// console.log(googleLink.target);
// console.log(img1.src);
// console.log(img1.getAttribute("src"));


// set attribute
// googleLink.href = "https://mms-it.com";
// googleLink.removeAttribute("target");
// img1.src = "./images/pattern.png";
// img1.setAttribute("src", "./images/pattern.png");

// images.forEach((image) => {
//   //   console.log(image);
//   image.src = "https://www.awyathasoe.com/wp-content/uploads/2021/06/814a7183_edit_2-683x1024.jpg";
// });

// console.log(lists);
lists.forEach((list) => {
  //   console.log(list);
  list.onclick = () => {
    list.classList.toggle("bg-gray-300");
    const countSelected = document.querySelectorAll(".list.bg-gray-300");
    skillCount.innerText = countSelected.length;
  };
});

// console.log(controlNav);

controlNav.onclick = () => {
  sideBar.classList.toggle("translate-x-full");
};
