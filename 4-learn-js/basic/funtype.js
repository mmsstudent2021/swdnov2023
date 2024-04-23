// fun statement

// function run(x, y) {
//   console.log(x);
//   console.log(y);
//   console.log(arguments);
//   return x + y;
// }

// fun expression
// const run = function (x, y) {
//   return x + y;
// };

// console.log(run(1, 5, 6, 6, 2, 3, 6));

console.dir(Function);

// const run = new Function("x", "y", "return x+y");

// console.log(run(1, 5));
// console.dir(run.bind(null, 1, 5).apply());
// console.dir(run.call(null, 1, 5));

function sumArg() {
  let total = 0;
  for (x of arguments) {
    total += x;
  }
  return total;
}

console.log(sumArg(1, 5, 2, 5,8));
