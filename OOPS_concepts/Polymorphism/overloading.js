// Function Overloading means having multiple functions with the same name but different parameter types or numbers.

// 📌 JavaScript does NOT support true function overloading because functions are objects and can't have multiple signatures.

// 1. Checking arguments.length

function greet(name) {
  if (arguments.length === 0) {
    console.log("Hello!");
  } else {
    console.log("Hello, " + name + "!");
  }
}

greet(); // Hello!
greet("Alice"); // Hello, Alice!

// 2. Using default parameters and type checking

function add(a, b = 0) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString(); // String concatenation
  }
  return a + b; // Numeric addition
}

console.log(add(2, 3)); // 5
console.log(add("Hello", 5)); // Hello5
