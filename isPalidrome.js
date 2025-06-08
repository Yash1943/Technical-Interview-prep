function isPalindrome(s) {
  let reversed = s.split("").reverse().join("");
  return s === reversed;
}

// Example usage:
let s = "racecar";
console.log(isPalindrome(s)); // Output: true
