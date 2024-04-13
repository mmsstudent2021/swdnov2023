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

// console.log(Date.now());

// const date = new Date();

// console.dir(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(Math.PI);

// console.log(Math.pow(2, 3));

// class Person {
//   constructor(name, age, skinColor) {
//     this.name = name;
//     this.age = age;
//     this.skinColor = skinColor;
//   }

//   eat(){
//     return this.name + " can eat";
//   }

//   sleep(){
//     return this.name + " can sleep";
//   }
// }

// class Student extends Person {
//   constructor(name, age, skinColor, uniName, majorName) {
//     super(name, age, skinColor);
//     this.uniName = uniName;
//     this.majorName = majorName;
//   }
// }

// const p1 = new Person("Mg Mg", 15, "white");

// console.log(p1);

// const st1 = new Student("Mg Mg", 15, "white", "WYTU", "EP");

// console.log(st1);

// class A {
//   a = "a";
//   b = "b";
//   c = "c";
//   d() {
//     return "d";
//   }
//   e() {
//     return "e";
//   }
// }

// class B extends A {
//   x = "x";
//   y = "y";
//   z = "z";
// }

// const a = new A();
// console.log(a);
// console.log(a.d());
// console.log(a.e());

// const b = new B();
// console.log(b);
// console.log(b.d());
// console.log(b.e());

// class Free {
//   repo = "unlimited";
//   push() {}

//   pull() {}
// }

// class Team extends Free {
//   codeSpace = true;
//   online() {}
// }

// class Enterprise extends Team {
//   manage = "Users";
//   defineRules() {}
// }

// const f = new Free();

// console.log(f);

// const t = new Team();
// console.log(t);

// const e = new Enterprise();
// console.log(e);

// class A {
//   #x = "xxx";

//   // getter , setter methods

//   getX() {
//     return this.#x;
//   }

//   setX(newValue) {
//     this.#x = newValue;
//   }
// }

// const a = new A();
// console.log(a);
// // console.log(a.#a);
// console.log(a.getX());

// a.setX("haha");

// console.log(a.getX());

class BankAccount {
  #money = 0;

  // getter, setter
  // getMoney() {}
  // setMoney() {}

  transition(message) {
    console.log(message);
  }

  // getter
  checkBalance() {
    this.transition("U check balance "+ this.#money);
    return this.#money;
  }

  checkBalanceWithCurrency() {
    return this.#money + " MMK";
  }

  // setter
  deposit(amount) {
    this.transition("U deposit balance "+ this.#money);

    this.#money += amount;
  }

  transfer(whom, amount) {
    if (amount < this.#money) {
      this.#money -= amount;
      return `Transfer money ${amount} to ${whom} successfully`;
    } else {
      return "Not enough money";
    }
  }

  withdraw(amount) {
    if (amount < this.#money) {
      this.#money -= amount;
      return `Withdraw money ${amount} successfully`;
    } else {
      return "Not enough money";
    }
  }
}

const ba1 = new BankAccount();
// console.log(ba1.#money);
// ba1.#money = 5000;
// console.log(ba1.#money);

console.log(ba1.checkBalance());
ba1.deposit(50000);
console.log(ba1.checkBalance());
ba1.deposit(3000);
console.log(ba1.checkBalance());
ba1.deposit(2000);
console.log(ba1.checkBalance());
console.log(ba1.transfer("kyaw kyaw", 500));
console.log(ba1.transfer("Mg Mg", 1500));
console.log(ba1.checkBalance());
console.log(ba1.withdraw(3000));
console.log(ba1.checkBalance());
console.log(ba1.withdraw(70000));
console.log(ba1.checkBalanceWithCurrency());
