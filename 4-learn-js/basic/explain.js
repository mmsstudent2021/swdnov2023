// // stack
// let  x = 5;
// const y = 15;

// // heap
// const z = ["a","b","c"];
// const f = function(){
//     return "I' m f";
// }

// let x = 5;
// console.log(x);

// let y = x;
// console.log(y);

// x = 10;
// console.log(x);

// console.log(y);

// const x = ["a", "b", "c"];
// console.log(x);

// const y = x;
// console.log(y);

// x[1] = "zzz";

// console.log(x);

// console.log(y);

// let x = 5;
// let y = 5;

// console.log(x === y);

// let x = [];
// let y = [];

// console.log(x === y);

// const a = {};
// const b = {};

// console.log(a === b);

// let x = ["a", "b", "c"];

// let y = x;

// x = ["d", "e", "f"];

// console.log(y);

// function run() {
//   console.log("hello");
// }

// run();

// scope

// if (false) {
//   console.log("hello");
// } else {
//   console.log("false");
// }

// if (true) {
//   let x = 5;
// } else {
// }

// console.log(x);

// let x = 0;

// if (false) {
//   x = 5;
// } else {
//   x = 3;
// }

// console.log(x);

// const run = function () {
//   if (false) {
//     return "this is true";
//   }

//   return "this is false";
// };

// console.log(run());

// console.log(false ? "this is true" : "this is not true");

// console.log(false && "haha");

// logical AND && အကုန်မှန်မှ မှန်တယ်

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// logical OR || အကုန်မှားမှ မှားတယ်

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(true || true || true);
// console.log(true || false || true);
// console.log(false || false || true);
// console.log(false || false || false);

// console.log(true && true && true);
// console.log(true && false && true);
// console.log(false && true && true);

// console.log(true && true && true && false);

// console.log(!!!true);

// const wakeUp = function (wakeUpHour) {
//   if (wakeUpHour < 8) {
//     return "It's ok 😉";
//   }
//   return "U will be punish";
// };

// console.log(wakeUp(6));
// console.log(wakeUp(9));
// console.log(wakeUp(7));

// const goToSchool = function (pocketMoney) {
//   if (pocketMoney >= 200) {
//     return "I will go to school with bus";
//   }
//   return "I will go to school by walking";
// };

// console.log(goToSchool(500));
// console.log(goToSchool(100));
// console.log(goToSchool(300));

// const result = function (mark) {
//   if (mark > 80) {
//     return "passed with D";
//   } else if (mark >= 40) {
//     return "passed";
//   } else if (mark < 40) {
//     return "fail";
//   }
// };

// console.log(result(50));
// console.log(result(85));
// console.log(result(70));
// console.log(result(25));

// const entrance = function (exam, viper) {
//   if (exam > 60 && viper > 60) {
//     return "Passed";
//   }
//   return "fail";
// };

// console.log(entrance(90, 75));
// console.log(entrance(40, 75));
// console.log(entrance(80, 75));
// console.log(entrance(80, 25));

// const vote = function (age, nationality) {
//   if (age >= 18 && nationality === "mm") {
//     return "U can vote";
//   }
//   return "U can not vote";
// };

// console.log(vote(30, "mm"));
// console.log(vote(15, "mm"));
// console.log(vote(45, "kr"));
// console.log(vote(18, "jp"));

// const bus = function (no) {
//   if (no === 20 || no === 65) {
//     return "U will reach MMS IT";
//   }
//   return "U will not reach MMS IT";
// };

// console.log(bus(20));
// console.log(bus(65));
// console.log(bus(90));
// console.log(bus(100));

// console.log(5 > 10);
// console.log(5 === 10);

// console.log(" " ? true : false);
// console.log("" ? true : false);
// console.log(0 ? true : false);
// console.log("0" ? true : false);
// console.log([] ? true : false);
// console.log({} ? true : false);
// console.log(null ? true : false);
// console.log(undefined ? true : false);
// console.log({} ? true : false);
// 5 times => 1 loop, 2 loop, 3loop, 4loop, 5loop, 6loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i === 2 || i === 4) continue; //skip
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }
// console.log(i);

// for (
//   let i = (function () {
//     console.log("first Statement");
//     return 1;
//   })();
//   (function () {
//     const condition = i <= 5;
//     console.log("second Statement", condition);
//     return condition;
//   })();
//   i = (function () {
//     i = i + 1;
//     console.log("third Statement", i);
//     return i;
//   })()
// ) {
//   console.log(i, "Code Block Loop");
// }

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "kiwi",
  "watermelon",
  "pineapple",
  "mango",
  "blueberry",
];

// console.log(fruits);
// for of, for in
// el => element

// for (let el of fruits) {
//   console.log(el);
// }

// for (let i in fruits) {
//   console.log(typeof i, fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i], typeof i);
// }

// const student = {
//   name: "John Doe",
//   gender: "Male",
//   township: "Anytown",
//   phone: "123-456-7890",
//   age: 20,
// };

// console.log(student);
// for in

// for (let key in student) {
//   console.log(key, student[key]);
// }

// console.log(key);

// const students = [
//     {
//         name:"hhz",
//         age:20,
//     },
//     {
//         name:"kyaw kyaw",
//         age : 12
//     }
// ];

const students = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 20,
    township: "Anytown",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 22,
    township: "Othertown",
  },
  {
    id: 3,
    name: "Alice Johnson",
    gender: "Female",
    age: 19,
    township: "Sometown",
  },
  {
    id: 4,
    name: "Bob Williams",
    gender: "Male",
    age: 21,
    township: "Anothertown",
  },
  {
    id: 5,
    name: "Sam Brown",
    gender: "Male",
    age: 23,
    township: "Lasttown",
  },
];

// console.log(students);

for (let student of students) {
  //   console.log(student.id,student.name, student.gender);
  for (key in student) {
    console.log(key,student[key]);
  }
  console.log("==========");
}
