// console.dir(window);

// console.log("innerWidth", window.innerWidth);
// console.log("innerHeight", window.innerHeight);
// console.log("outerWidth", window.outerWidth);
// console.log("outerHeight", window.outerHeight);

// addEventListener("scroll", () => {
//   console.clear();
//   console.log(window.scrollY);
// });

// addEventListener("resize", () => {
//   console.clear();
//   console.log("innerWidth", window.innerWidth);
//   console.log("innerHeight", window.innerHeight);
//   console.log("outerWidth", window.outerWidth);
//   console.log("outerHeight", window.outerHeight);
// });

// addEventListener("online", () => {
//   console.log("You are online now");
// });

// addEventListener("offline", () => {
//   console.log("You are offline now");
// });

// addEventListener("load", () => {
//   console.log("c");
// });
// console.log("a");
// console.log("b");

// const heading = document.querySelector("#heading");
// console.log(heading.style);
// console.log(heading.style.color);
// console.log(heading.style.textTransform);

// const para = document.querySelector("#para");
// // console.log(para.style);
// // console.log(para.style.color);

// console.log(window.getComputedStyle(para));
// console.log(window.getComputedStyle(para).color);
// console.log(window.getComputedStyle(para).textAlign);

// time out

// const boom = () => {
//   console.log("boom explore");
//   const h1 = document.createElement("h1");
//   h1.innerText = "BOOM";
//   document.body.append(h1);
// };

// setTimeout(boom, 3000);

// boom();

// const runBtn = document.querySelector("#runBtn");
// const alarm = document.querySelector("#alarm");

// const showAlert = () => {
//   console.log("Plank Finish");
//   const h1 = document.createElement("h1");
//   h1.innerText = "Plank Finish";
//   document.body.append(h1);
//   alarm.volume = 0.1;
//   alarm.play();
// };

// runBtn.addEventListener("click", () => {
//   setTimeout(showAlert, 3000);
//   console.log("plank start");
// });

// const clock = document.querySelector("#clock");

// const showTime = () => {
//   console.clear();
//   const date = new Date();
//   const currentTime = date.toLocaleTimeString();
//   console.log(currentTime);
//   clock.innerText = currentTime;
// };

// setInterval(showTime, 1000);

// const stopWatch = document.querySelector("#stopWatch");
// const startBtn = document.querySelector("#startBtn");
// const stopBtn = document.querySelector("#stopBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let count = 0;

// const runner = () => {
//   count += 1;
//   stopWatch.innerText = count.toString().padStart(4, 0);
// };

// let intervalId;

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(runner, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
// });

// resetBtn.addEventListener("click", () => {
//   stopWatch.innerText = "0000";
// });

// const showConsole = () => {
//   console.log("ha ha par");
// };

// let timeOutId;

// timeOutId = setTimeout(showConsole, 5000);

// function cancel() {
//   clearTimeout(timeOutId);
// }

// console.log(screen);

// addEventListener("change", () => {
//   console.log(screen.orientation);
// });

// const firstScreen = (await window.getScreenDetails()).screens[0];
// firstScreen.addEventListener("change", (event) => {
//   console.log("The first screen has changed.", event, firstScreen);
// });

// let batteryIsCharging = false;

// navigator.getBattery().then((battery) => {
//   console.log(battery);
//   batteryIsCharging = battery.charging;

//   battery.addEventListener("chargingchange", () => {
//     batteryIsCharging = battery.charging;
//   });
// });

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   console.log(position);
// }

// getLocation();
