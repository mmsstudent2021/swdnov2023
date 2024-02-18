// console.log("Hello I'm learning JavaScript")

// function findAge(birthYear){
//     let currentYear = 2024;
//     let age = currentYear - birthYear;
//     return age;
// }

// console.log(findAge(1994))
// console.log(findAge(2005))
// console.log(findAge(2002))

// buying product
// 1. select product
// 2. check price
// 3. quantity
// cost = price * quantity

// tax (percentage)

// 30000 amount , tax 5% = ?
// 500000 amount , tax 5% = ?
// 7000 amount , tax 5% = ?

// let total = 0;

// function buy(productName, productPrice, quantity) {
//   let cost = productPrice * quantity;
//   total += cost;
//   return productName + " - " + quantity + " - " + cost;
// }

// function findTax(amount, percentage) {
//   return amount * (percentage / 100);
// }

// console.log("Shopping Receipt");

// console.log(buy("apple", 500, 5));
// console.log(buy("orange", 600, 3));
// console.log(buy("mango", 1200, 7));
// console.log(buy("lime", 100, 3));
// console.log("----------------------");

// console.log("total - " + total);
// let tax = findTax(total, 5);
// console.log("tax - " + tax);

// console.log("----------------------");

// let netTotal = tax + total;
// console.log("cash - " + netTotal);

// if(netTotal > 10000){
//     console.log("U got lucky draw")
// }

// isEven or isOdd

// number/2
// if reminder(%) is 1 = odd
// else reminder is 0 = even

// conditional statement

// function findEvenOdd(number) {
//   let reminder = number % 2;
//     if(reminder == 1){
//         return "Odd";
//     }else{
//         return "Even";
//     }
// }

// console.log(findEvenOdd(7))
// console.log(findEvenOdd(14))
// console.log(findEvenOdd(30))
// console.log(findEvenOdd(1995))

let result = "Over all passed";

function findPassFail(mark) {
  if (mark >= 40) {
    return "passed";
  } else {
    result = "Over all failed";
    return "failed";
  }
}

// console.log(findPassFail(50));
// console.log(findPassFail(45));
// console.log(findPassFail(70));
// console.log(findPassFail(70));
// console.log(findPassFail(53));
// console.log(findPassFail(85));

// console.log(result);

// array , obj

let marks = [50, 45, 20, 79, 53, 35];

let markObj = {
  mm: 50,
  en: 35,
  math: 70,
  chem: 79,
  phy: 22,
  bio: 85,
};

let studentMark = [
  {
    id: 1,
    subject: "myanmar",
    short: "mm",
    mark: 50,
  },
  {
    id: 2,
    subject: "english",
    short: "en",
    mark: 45,
  },
  {
    id: 3,
    subject: "math",
    short: "math",
    mark: 70,
  },
  {
    id: 4,
    subject: "chemistry",
    short: "chem",
    mark: 79,
  },
  {
    id: 5,
    subject: "physics",
    short: "phy",
    mark: 53,
  },
  {
    id: 6,
    subject: "Biology",
    short: "bio",
    mark: 85,
  },
];

for (z of studentMark) {
  console.log(z.subject,z.mark,findPassFail(z.mark));
}

// for in (obj loop)

// for (x in markObj) {
// //   console.log(x,markObj[x]);
//     console.log(x,markObj[x], findPassFail(markObj[x]))
// }

// for(let i=0;i<marks.length;i++){
//     // console.log(i,marks[i])
//     console.log(i,findPassFail(marks[i]))
// }

// for of ( array loop )

// for (i of marks) {
//   console.log(findPassFail(i));
// }

// console.log(result);

// looping
// 1 => 100
// 100 => 1
// for(let i=1;i<=100;i+=3){
//     console.log(i)
// }

// for (let i = 100; i >= 1; i-=9) {
//   console.log(i);
// }
