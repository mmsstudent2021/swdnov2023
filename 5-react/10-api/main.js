import "./style.css";

//async => await

const fetchBtn = document.querySelector("#fetchBtn");
const handleFetchBtn = async () => {
  console.log(hhz);

  // const mark = 50;

  // if (mark >= 40) {
  //   console.log("fail");
  // } else {
  //   console.log("passed");
  // }

  // const res1 = await fetch("https://fakestoreapi.com/products/1");
  // const data1 = await res1.json();
  // console.log(data1);

  // const res2 = await fetch("https://fakestoreapi.com/products/2");
  // const data2 = await res2.json();
  // console.log(data2);

  // const res3 = await fetch("https://fakestoreapi.com/products/3");
  // const data3 = await res3.json();
  // console.log(data3);

  // const res4 = await fetch("https://fakestoreapi.com/products/4");
  // const data4 = await res4.json();
  // console.log(data4);

  // const res5 = await fetch("https://fakestoreapi.com/products/5");
  // const data5 = await res5.json();
  // console.log(data5);

  // fetch("https://fakestoreapi.com/products/1")
  //   .then((data) => data.text())
  //   .then((result) => {
  //     console.log(JSON.parse(result));
  //     fetch("https://fakestoreapi.com/products/2")
  //       .then((data) => data.text())
  //       .then((result) => {
  //         console.log(JSON.parse(result));
  //         fetch("https://fakestoreapi.com/products/3")
  //           .then((data) => data.text())
  //           .then((result) => console.log(JSON.parse(result)));
  //       });
  //   });
  const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const val = Math.floor(Math.random() * 10);
      console.log(val);
      if (val > 5) {
        resolve(val);
      } else {
        reject(val);
      }
    }, 1000);
  });
  p.then(
    function (x) {
      console.log("success", x);
    },
    function (y) {
      console.log("fail", y);
    }
  );

  p.catch((e) => {
    console.log(e);
  });

  p.finally(() => {
    console.log("i'm final");
  })

  // console.log(p);
  // let x = 0;
  // const p = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve(5);
  //   }, 2000);
  // });
  // p.then(function (data) {
  //   x = data;
  //   console.log(x === 5 ? "good" : "bad");
  // });
  // let x = 0;
  // // computation
  // setTimeout(() => {
  //   x = 5;
  // }, 100);
  // console.log(x === 5 ? 'good' : 'bad');
  // sync
  // console.log("a");
  // console.log("b");
  // console.log("c");
  // console.log("u click");
  // long time sync process
  // console.log("start");
  // setTimeout(() => {
  //   console.log("hello");
  // },1000)
  // let x = 0;
  // for (let i = 1; i < 9999999999; i++) {
  //   x += i;
  // }
  // console.log(x);
  // async
  // fetch("https://fakestoreapi.com/products/1")
  // .then((res) => res.json())
  // .then((categories) => console.log(categories));
  // console.log("end");
  // fetch("https://fakestoreapi.com/products/2")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));
  // fetch("https://fakestoreapi.com/products/3")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));
  // fetch("https://fakestoreapi.com/products/4")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));
  // fetch("https://fakestoreapi.com/products/5")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));
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
  // fetch("https://fakestoreapi.com/products/categories")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));
};

fetchBtn.addEventListener("click", handleFetchBtn);
