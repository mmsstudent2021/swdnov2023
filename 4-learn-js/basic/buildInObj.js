// console.dir(Date);

// console.log(Date.now());
// console.log(Date.parse());

// const date = new Date();

// console.dir(date);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(monthNames[date.getMonth()]);
// console.log(date.getDay());
// console.log(dayNames[date.getDay()]);
// console.log(date.getDate());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// console.log(date.getTime());
// console.log(Date.now());

// console.log(date.getYear());

// console.dir(Date);

// const d = new Date("1995-12-17T03:24:00");

// console.log(d);
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getHours());

// console.log(d.toDateString());
// console.log(d.toTimeString());

// const d = new Date();

// // d.setHours(d.getHours() + 300);
// // d.setMonth(d.getMonth() + 4);
// const totalSwdCourseHour = 50;
// const learningHourPerDay = 2;
// const learningDay = totalSwdCourseHour / learningHourPerDay;
// d.setDate(d.getDate() + learningDay);

// console.log(d);

// 1994.7.22 -> 100day

// const date = new Date(1994, 6, 22);

// date.setDate(date.getDate() + 100);

// console.log(date);

// console.dir(Number);

// class Person {
//   static x = "xxx";
//   static y = "yyy";

//   static z() {
//     return "static z";
//   }

//   a() {
//     return "a";
//   }

//   b() {
//     return "b";
//   }
// }

// console.dir(Person);
// console.dir(Person.x);
// console.dir(Person.y);
// console.dir(Person.z());
// // console.dir(Person.a());

// const p = new Person();
// console.log(p.a());
// console.log(p.b());

// console.dir(Number);
// console.dir(Number.MAX_SAFE_INTEGER);
// console.dir(Number.MIN_SAFE_INTEGER);
// console.dir(Number.NEGATIVE_INFINITY);
// console.dir(Number.POSITIVE_INFINITY);
// console.dir(Number.MAX_VALUE);
// console.dir(Number.MIN_VALUE);

// console.log(Number.isNaN("hein" - "htet"));
// console.log(Number.isNaN(5 - 4));

// console.log(Number.isInteger(3));
// console.log(Number.isInteger("3"));
// console.log(Number.isInteger(0));
// console.log(Number.isInteger("a"));

// console.log(Number.isSafeInteger(2 ** 53));

// const weight = "230.75 lb";

// console.log(Number.parseInt(weight));
// console.log(Number.parseFloat(weight));

// const rentalPrice = "Baht 13000";

// console.log(Number.parseInt(rentalPrice));

// // console.log(Number.parseInt(12.74));

// console.log(Number.parseFloat(12.34));

// const num = 746.553;
// console.log(num);

// console.log(num.toExponential());
// console.log(num.toFixed());
// console.log(Number.parseFloat(num.toFixed(2)));

// console.log(num.toString());

// const number = new Number(num);

// console.dir(number);

// console.log(number.toExponential());
// console.log(number.toFixed());
// console.log(number.toFixed(1));
// console.log(number.toFixed(2));
// console.log(number.toFixed(3));
// console.log(number.toFixed(5));

// console.dir(Math);
// console.log(Math.PI);
// console.log(Math.sin(100));

// console.log(Math.pow(2, 2));
// console.log(Math.pow(2, 3));
// console.log(Math.pow(2, 17));
// console.log(2 ** 17);

// console.log(Math.ceil(1.1));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.3));
// console.log(Math.floor(5.7));

// console.log(Math.abs(500));
// console.log(Math.abs(-500));
// console.log(Math.abs(100 - 500));

// console.log(Math.min(2, 3, 1));
// console.log(Math.max(2, 3, 1));

// console.log(Math.min(-2, -3, -1));
// console.log(Math.max(-2, -3, -1));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// const rand = Math.random();

// console.log(rand);

// console.log(rand * 10);
// console.log(Math.floor(rand * 10)); // 0 - 9
// console.log(Math.ceil(rand * 10)); // 1 - 10
// console.log((rand * 10).toFixed()); // 0 - 10

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(1, 7));
