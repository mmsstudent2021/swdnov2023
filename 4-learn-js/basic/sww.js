// if (false) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// const x = 5;

// switch (x) {
//   case 1:
//     console.log("*");
//     break;
//   case 2:
//     console.log("*");
//     console.log("* *");
//     break;
//   case 3:
//     console.log("*");
//     console.log("* *");
//     console.log("* * *");
//     break;
// }

// let x = 1;

// while (x <= 5) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   x++;
// }

// let x = 3;

// do {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   x++;
// } while (x <= 5);

// const Employee = {
//   firstname: "Maria",
//   lastname: "Sanchez",
// };

// delete Employee.firstname;
// console.log(Employee);

// const car = { make: "Honda", model: "Accord", year: 1998 };

// console.log(car);

// console.log("hhz" in car);

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof null);

// const test = {
//   prop: 42,
//   aa: "aa",
//   bb: "bb",
//   fun: function () {
//     console.log(this.aa, this.bb);
//   },
// };

// console.log(test.fun());

// imperative
// 1. how to make sushi
// 2. buy ingredient (rice,yay nyi, chicken, egg, carrot, sausage)
// 3. cleaning rice & cook
// 4. cleaning all
// 5. လှီးချွတ်
// 6. ဆူရှိ လိပ်
// 7. အကွင်းလှီး
// 8. plating
// 9. eat

// declarative
// 1. ဆိုင်သွားလိုက်
// 2. menu ကြည့်ပြီးမှာ
// 3. ဝိုက်ပေါ့

// const points = [34, 15, 2, 52, 19, 56, 30, 57];

// let total = 0; // result

// for (let i = 0; i < points.length; i++) {
//   // console.log(points[i]);
//   total = total + points[i];
// }

// console.log(total);

// const arraySum = function (numArray) {
//   let total = 0;
//   for (el of numArray) {
//     total += el;
//   }
//   return total;
// };

// console.log(arraySum([1,2,3]));
// console.log(arraySum([1,1,5,5]));
// console.log(arraySum([1,3,9,10]));

// const arraySum = {
//   arr: [],
//   sum: function () {
//     let total = 0;
//     for (el of this.arr) {
//       total += el;
//     }
//     return total;
//   },
// };


// arraySum.arr = [1,2,3];
// console.log(arraySum.sum());

// arraySum.arr = [1,1,5,5];
// console.log(arraySum.sum());

// arraySum.arr = [1,3,9,10];
// console.log(arraySum.sum());