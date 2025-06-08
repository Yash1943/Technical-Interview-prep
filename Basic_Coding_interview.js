// 1. Reverse a number
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}

// 2. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 3. Fibonacci series
function fibonacci(n) {
  let a = 0,
    b = 1;
  let series = [];
  for (let i = 0; i < n; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }
  return series;
}

// 4. Bubble sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 5. Pseudocode for SQL Injection Detection (conceptual function)
function isSQLInjection(input) {
  const patterns = ["'", "--", ";", "/*", "*/", "xp_"];
  return patterns.some((p) => input.includes(p));
}

// 6. Remove digits from a string
function removeDigits(str) {
  return str.replace(/\d/g, "");
}

// 7. Encrypt password (Caesar cipher)
function encrypt(password, shift = 3) {
  return password
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const base = char === char.toLowerCase() ? "a".charCodeAt(0) : "A".charCodeAt(0);
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      }
      return char;
    })
    .join("");
}

// 8. Palindrome check
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// 9. Stack and Queue using arrays
const stack = [];
stack.push(1);
stack.push(2);
const stackPop = stack.pop();

const queue = [];
queue.push(1);
queue.push(2);
const queuePop = queue.shift();

// 10. Tree Traversal
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function preorder(root) {
  if (root) {
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
  }
}

function inorder(root) {
  if (root) {
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
  }
}

// 11. Binary and Linear Search
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

function binarySearch(arr, x) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

// 12. Quick Sort and Merge Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter((x) => x <= pivot);
  const right = arr.slice(1).filter((x) => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}

// 13. Hash table (using JS object)
const hashTable = {};
hashTable["name"] = "John";
hashTable["age"] = 25;

// 14. Linked list vs Array (basic node)
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 15. Recursion (factorial)
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// 16. Infix to Postfix
function infixToPostfix(expr) {
  const prec = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  const stack = [],
    output = [];
  for (let char of expr) {
    if (/[a-z0-9]/i.test(char)) output.push(char);
    else if (char === "(") stack.push(char);
    else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") output.push(stack.pop());
      stack.pop();
    } else {
      while (stack.length && prec[char] <= prec[stack[stack.length - 1]]) output.push(stack.pop());
      stack.push(char);
    }
  }
  return output.concat(stack.reverse()).join("");
}

// 17. Big-O notation
// Example: O(n) for linear search, O(log n) for binary search, O(n^2) for bubble sort
