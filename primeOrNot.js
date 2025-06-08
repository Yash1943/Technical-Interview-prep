function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Example usage:
let n = 10;
console.log(isPrime(n)); // Output: true
console.log(Math.sqrt(n));
