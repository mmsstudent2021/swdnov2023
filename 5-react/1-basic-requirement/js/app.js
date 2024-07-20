const points = [4, 2, 5, 3, 2, 7, 1, 4];

// function pureAdd(x, y) {
//   return x + y;
// }

// console.log(pureAdd(4,5));
// console.log(pureAdd(4,5));
// console.log(pureAdd(4,5));
// console.log(pureAdd(4,5));

// Impure function with side effect
// let total = 0;

// function add(x) {
//   total += x;
//   return total;
// }

// console.log(add(5));
// console.log(add(5));
// console.log(add(5));
// console.log(add(5));
// console.log(add(15));

// console.log(points);

// const newPoints = [...points,"aaa","bbb","ccc"];

// console.log(newPoints);
// console.log(points);

// points.push("aaa");
// points.push("bbb");
// points.push("ccc");

// console.log(points);

// const uniqueArray = new Set(points);
// console.log(uniqueArray);

// const uniqueArray = []; // state

// for (let point of points) {
//   if (!uniqueArray.includes(point)) {
//     uniqueArray.push(point);
//   }
//   console.log(uniqueArray);
// }

// console.log(uniqueArray);

// point total

// let total = 0; // state

// total += points[0];
// total += points[1];
// total += points[2];
// total += points[3];
// for (let point of points) {
//   //   console.log(point);
//   total += point;
// }

// console.log(total);

// const total = points.reduce((pv, cv) => pv + cv, 0);
// console.log(total);
