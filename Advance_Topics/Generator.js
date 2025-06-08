function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();

console.log(fib.next().value); // logs 1
console.log(fib.next().value); // logs 1
console.log(fib.next().value); // logs 2
console.log(fib.next().value); // logs 3
console.log(fib.next().value); // logs 5
