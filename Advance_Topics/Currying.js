function add(a, b) {
  return a + b;
}

function curryAdd(a) {
  return function (b) {
    return add(a, b);
  };
}

const add5 = curryAdd(5);
console.log(add5(10)); // 15
