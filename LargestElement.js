function findLargest(arr) {
  if (arr.length === 0) return null;
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) largest = num;
  }
  return largest;
}

// Example usage:
let arr = [1, 2, 9, 4, 10];
console.log(findLargest(arr)); // Output: 5
