import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");
const handleFetchBtn = () => {
  console.log("u click");
  // fetch("http://localhost:5000/tasks")
  //   .then((res) => res.text())
  //   .then((data) => {
  //     console.log(typeof data);
  //     //json string => js object
  //     console.log(JSON.parse(data))
  //   });

  // fetch("http://localhost:5000/tasks/1")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // fetch("http://localhost:5000/tasks/2")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // fetch("http://localhost:5000/tasks/3")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // fetch(
  //   "https://api.fastforex.io/fetch-all?api_key=09e87ac421-c86994fc02-sif2tk"
  // )
  //   .then((res) => res.json())
  //   .then((rates) => console.log(rates));

  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((categories) => console.log(categories));

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => console.log(products));
};

fetchBtn.addEventListener("click", handleFetchBtn);
