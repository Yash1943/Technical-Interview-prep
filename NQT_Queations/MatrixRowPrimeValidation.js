function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solveQ2(m, n, elements) {
  if (m <= 0 || n <= 0) return "Wrong Input";
  if (elements.length < m * n) return "Wrong Input";
  if (elements.some((x) => x < 0)) return "Wrong Input";

  for (let i = 0; i < m; i++) {
    let row = elements.slice(i * n, (i + 1) * n);
    if (!row.some(isPrime)) return "Not Valid";
  }
  return "Valid";
}

// Examples:
console.log(solveQ2(2, 3, [2, 3, 4, 6, 5, 7])); // Valid
console.log(solveQ2(2, 3, [2, 2, 4, 6, 8, 10])); // Not Valid
console.log(solveQ2(2, 3, [2, 3, -4, 6, 5, 7])); // Wrong Input
