function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]

console.log(new Set(arr));
