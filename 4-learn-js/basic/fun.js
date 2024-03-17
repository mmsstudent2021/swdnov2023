// function run(x) {
//   return x * 2;
// }

// console.log(run(5));

// const run = function (x) {
//   return x * 2;
// };

// console.log(run(5));

// (function () {
//   console.log("IIFE");
// })();

// const x = function () {
//   return "this is x";
// };

// const y = function () {
//   return x() + "this is y";
// };

// console.log(x());
// console.log(y());

// code block ( block scope )
// {
//   let x = 5;
//   const y = 10;

//   console.log(x);
// }

// console.log(x + y);

// function run() {
//   let x = 5;

// }
// run();

// console.log(x);

// let z = 15;

// {
//   console.log(z);
// }

// function run() {
//   console.log(z);
// }
// run();

// let x = 5;

// console.log(x);

// console.log(run());

// // fun statement
// function run() {
//   return "this is run";
// }

// console.log(run());

// const run = function () {
//   return "this is run";
// };

// console.log(x);

// var x = 5;

// const results = [];
// let resultIndex = 0;

// const area = function (width, breadth) {
//   const result = width * breadth;
//   results[resultIndex++] = { width, breadth, area: result };
//   return `${result} sqft`;
// };

// console.log(area(15, 50));
// console.log(area(16, 60));
// console.log(area(25, 50));
// console.log(area(12, 50));
// console.log(area(13, 55));

// console.table(results);

// 200 usd to mmk
// 200 (2100 mmk) to mmk
// (200 * 2100) mmk to mmk
// 50 sgd to mmk
// 15 eur to mmk

const rates = {
  usd: 2100,
  eur: 2300,
  sgd: 1500,
};

const exchangeToMMK = (amount, currency) => {
  const currencyRate = rates[currency];
  //   console.log(currencyRate);
  const result = amount * currencyRate;
  return `${result} mmk`;
};

console.log(exchangeToMMK(200, "usd"));
console.log(exchangeToMMK(50, "sgd"));
console.log(exchangeToMMK(15, "eur"));

rates.usd = 3600;

console.log(exchangeToMMK(200, "usd"));

// 2100 mmk = 1 usd
// 1 mmk = 1/2100 usd

// 50000 mmk to usd
// 50000 (1/2100) to usd

// 300000 mmk to sgd
// 8000 mmk to eur

// const exchangeFromMmkToCurrency = function (amount, currency) {
//   const currencyRate = rates[currency];
//   const result = amount / currencyRate;
//   return `${result} ${currency}`;
// };

// console.log(exchangeFromMmkToCurrency(50000, "usd"));
// console.log(exchangeFromMmkToCurrency(300000, "sgd"));
// console.log(exchangeFromMmkToCurrency(8000, "eur"));
