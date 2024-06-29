const myTitle = document.querySelector("#myTitle");
const numInput = document.querySelector("#numInput");
const mySong = document.querySelector("#mySong");
const songPlay = document.querySelector("#songPlay");
const cover = document.querySelector(".cover");

console.log(cover.classList);

songPlay.addEventListener("click", () => {
  mySong.play();
  //   cover.click();
  numInput.focus();
});

cover.addEventListener("load", () => {
  console.log("image loaded");
});

// console.dir(myTitle);
console.dir(mySong);
mySong.addEventListener("play", () => {
  console.log("U play song");
  cover.classList.add("rotating");
  document.body.style.backgroundColor = "gray";
});

mySong.addEventListener("pause", () => {
  console.log("U pause song");
  console.log(mySong.currentTime);
  cover.classList.remove("rotating");

  document.body.style.backgroundColor = "white";
});

mySong.addEventListener("ended", () => {
  console.log("song end");
  mySong.play();
});

cover.addEventListener("click", () => {
  console.log("U click image");
});

cover.addEventListener("drag", () => {
  console.log("u drag");
});
