// let x = 5;
// let y = 3;
// console.log(x + y);

// {
//   let z = 10;
//   console.log(z);
// }

// let x;// var declaring
// let y;

// x = 5; // value assign
// y = 10;

// let z = 7;

// y = 8; // reassign value
// y = 3; // reassign value

// console.log(x);
// console.log(y);
// console.log(z);

// const a = 5;
// const b = 10;

// // constant

// a = 7;

// console.log(a, b);

// let myName = "hhz";
// // let MyName = "hein htet zan";

// console.log(myName);
// console.log(MYNAME);

// let myName = 'Hein Htet Zan';

// console.log("I'm "+myName);

// // my laptop screen size is 14"

// console.log('I have 14" laptop');

// // my height is 5' 10" and taller than your

// console.log('my height is 5\' 10" and taller than your');

// let myName = `hein htet zan`;
// console.log(`I'm ${myName}`);
// console.log(`I have 14" laptop`);
// console.log(`my height is 5' 10" and taller than your`);

// let myAge = 30;
// let myWeightInLb = 230.5;
// let roomTemp = -10;
// let gfCount = 0;

// let x = 0b1; // binary

// let y = 0o6; // octal

// let z = 0x1e; // hexa

// console.log(16 / 2);
// console.log(0o16 / 2);
// console.log(0x13fe / 2);

// const fruits = ["apple", "orange", "mango", "banana"];

// fruits[2] = "lemon"; // overwrite element

// console.log(fruits);
// console.log(fruits[2]); //access element
// console.log(fruits[3]);
// console.log(fruits[6]);

// const arr = [];

// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";
// arr[3] = "d";

// arr[9] = "x";

// console.log(arr);
// console.log(arr.length);

// const student = {
//   name: "hhz",
//   age: 18,
//   major: "web development",
//   skill: ["html", "css", "js"],
// };

// student.age = 19; // overwrite element
// student.pocketMoney = 500; // add new element

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.major);
// console.log(student.skill[0]);
// console.log(student.skill[1]);
// console.log(student.skill[2]);

// const obj = {};
// let z = "c";

// obj.a = "aaa";
// obj.b = "bbb";
// obj.c = "ccc"

// console.log(obj);
// console.log(obj["a"]);
// console.log(obj[z]);

// const name = "Mg Mg";
// let age = 15;
// let township = "Kyauk Myaung";

// let pocketMoney = 200;

// let orangePrice = 50;

// pocketMoney -= orangePrice;

// // console.log(pocketMoney);

// const bag = ["Myanmar book", "English Book", "Bio Book"];

// console.log(bag);

// let pen = false;

// let canMgMgFriSmoke = true;
// let canMgMgSmoke = false;

// const information = {
//   name,
//   age,
//   township,
//   canSmoke: canMgMgSmoke,
// };

// const student1 = {
//   name: "Kyaw Kyaw",
//   age: 17,
//   township: "haling",
//   canSmoke: true,
// };

// const student2 = {
//   name: "Mya Mya",
//   age: 15,
//   township: "sanchaung",
//   canSmoke: false,
// };

// const student3 = {
//   name: "Zaw Zaw",
//   age: 16,
//   township: "bahan",
//   canSmoke: true,
// };

// const students = [student1, student2, student3, information];

// console.log(students);
// console.table(students);

// console.log(typeof information);
// console.log(typeof bag);
// console.log(typeof students);

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof canMgMgFriSmoke);

// let x;
// console.log(x);
// let arr = [];
// console.log(arr[5]);
// function run(){

// }

// console.log(run());

// let y = null;

// console.log(y);

// console.log(1 != 6);

// function run(){
//     console.log("hello");
// }

// run()

function triangle() {
  console.log("*");
  console.log("* *");
  return "I'm triangle";
  console.log("* * *");
  console.log("* * * *");
}

console.log(triangle());
console.log(triangle());
console.log(triangle());

function area(width=0, height=0) {
  console.log(width);
  console.log(height);
  return width * height;
}

console.log(area());
console.log(area(25,50));
console.log(area(16,60));
console.log(area(30,40));
// console.log(area(16, 60));
