function factorial(n) {
  // Base case: if n is 0, return 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

// Example usage:
let num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`); // Output: Factorial of 5 is 120
