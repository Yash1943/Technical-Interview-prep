//push() - Adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ['apple', 'banana', 'orange']

//pop() - Removes the last element from an array and returns that element.
let fruits = ["apple", "banana", "orange"];
let last = fruits.pop();
console.log(last); // 'orange'
console.log(fruits); // ['apple', 'banana']

//shift() - Removes the first element from an array and returns that element.
let fruits = ["apple", "banana", "orange"];
let first = fruits.shift();
console.log(first); // 'apple'
console.log(fruits); // ['banana', 'orange']

//unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits); // ['apple', 'banana', 'orange']

//splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape"); // Removes 1 element at index 1 and adds 'grape'
console.log(fruits); // ['apple', 'grape', 'orange']

//slice() - Returns a shallow copy of a portion of an array into a new array object.
let fruits = ["apple", "banana", "orange"];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'orange']

//forEach() - Executes a provided function once for each array element.
let fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));
// Output:
// 'apple'
// 'banana'
// 'orange'

//map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3];
let squared = numbers.map((num) => num * num);
console.log(squared); // [1, 4, 9]

//filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

//reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
