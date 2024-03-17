const obj = {
  // properties
  a: 5,
  b: 15,
  xyz: 100,
  // methods
  run: function () {
    return "run method";
  },
  test() {
    // console.log(this);
    return `test method , ${this.a}, ${this.b}, ${this.run()}`;
  },
};

console.log(obj);

console.log(obj.test());
