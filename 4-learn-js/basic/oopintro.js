// const car = {
//   model: "car a",
//   brand: "neta",
//   type: "ev",
//   color: "blue",
//   enginPower: 1.5,
//   drive() {
//     return this.model + " can drive";
//   },
//   break() {
//     return this.model + " can stop";
//   },
// };

// console.log(car);
// console.log(car.drive());
// console.log(car.break());
// console.log(car.model);
// console.log(car.type);
// console.log(car.brand);

// class Car {
//   //   model = "V";
//   //   brand = "Neta";
//   //   type = "EV";
//   //   color = "White";
//   //   enginPower = 1.5;

//   constructor(inputModel, inputBrand) {
//     // console.log("I'm constructor", a, b);
//     this.model = inputModel;
//     this.brand = inputBrand;
//   }

//   drive() {
//     return this.model + " can drive";
//   }
//   break() {
//     return this.model + " can stop";
//   }
// }

// // console.log(Car);
// // instantiate (instance ဆောက်တယ်) | class to obj | new keyword

// const x = new Car("NetaV", "Neta");
// console.log(x);
// console.log(x.drive());

// const y = new Car("Bz4x", "Toyota");
// console.log(y);
// console.log(y.drive());

// const z = new Car("Model S", "Tesla");
// console.log(z);
// console.log(z.drive());

// console.log(x.drive());
// console.log(x.break());

// class Car {
//   // model,color,typeof,brand;
// }

// data initialize

// oop concept access modifier

// class Car {
//   model = "V";
//   brand = "Neta";
//   static type = "EV";
//   static color = "White";
//   #enginPower = 1.5;

//   static backLock() {
//     return "can lock back view glass";
//   }

//   run() {
//     return "Model " + this.model + " has " + this.#enginPower + " kwatt";
//   }
// }

// console.log(Car.type);
// console.log(Car.color);
// console.log(Car.backLock());

// const x = new Car();

// console.log(x);
// console.log(x.model);
// // console.log(x.#enginPower);
// console.log(x.run());

console.log(Date.now());

const date = new Date();

console.dir(date);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

console.log(date.toDateString());
console.log(date.toTimeString());

console.log(Math.PI);

console.log(Math.pow(2, 3));
