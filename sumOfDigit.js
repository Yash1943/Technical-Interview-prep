function sumOfDigits(n) {
  console.log(n.toString().split(""));
  return n
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
}

// Example usage:
let n = 12345;
console.log(sumOfDigits(n)); // Output: 15
