function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getNthPrime(n) {
  let count = 0,
    num = 2;
  while (true) {
    if (isPrime(num)) {
      count++;
      if (count === n) return num;
    }
    num++;
  }
}

function digitRoot(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
  }
  return num;
}

function solveQ1(m, n) {
  let prime = getNthPrime(m);
  let root = digitRoot(prime);
  return prime * root;
}

// Examples
console.log(solveQ1(6, 8)); // Output: 52
console.log(solveQ1(10, 50)); // Output: 58
