// add
// remove
// update

// const macBook = {
//   model: "MacBook Pro",
//   storage: "512GB SSD",
//   price: 1999,
// };

// macBook.color = "grey";

// add
// const obj = { ...macBook, color: "grey", cpu: "M1" };

// remove
// const { storage, ...obj } = macBook;

// update
// const obj = { ...macBook, price : 3500 };

// console.log(macBook);
// console.log(obj);

// const fruits = ["apple", "banana", "cherry", "grape", "honeydew"];

// add
// const arr = [...fruits, "kiwi"];
// remove
// const arr = fruits.filter(el => el !== "grape")
// update
// const arr = fruits.map((el) => el === "grape" ? "orange" : el);

// console.log(fruits);
// console.log(arr);

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    price: 1999,
    stock: 25,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    stock: 50,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 349,
    stock: 100,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1199,
    stock: 15,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Apple iPad Pro",
    price: 999,
    stock: 30,
    rating: 4.8,
  },
];

//add
// const newProduct = {
//     id: 6,
//     name: "Apple MacBook Pro",
//     price: 1999,
//     stock: 25,
//     rating: 4.8,
//   };
// const arr = [...products, newProduct];

// remove
// const arr = products.filter((el) => el.id !== 3);

// update
// const arr = products.map((el) => {
//   if (el.id === 3) {
//     return { ...el, stock: el.stock + 50 };
//   }
//   return el;
// });

// const arr = products.map((el) => {
//   return { ...el, price: el.price + 100 };
// });

// console.table(products);
// console.table(arr);
