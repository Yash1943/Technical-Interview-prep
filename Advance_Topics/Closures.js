function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
console.log(c()); // 3
