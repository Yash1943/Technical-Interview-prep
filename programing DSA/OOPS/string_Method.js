//charAt() - Returns the character at the specified index.
let str = 'Hello';
console.log(str.charAt(0)); // 'H'

//concat() - Combines the text of two or more strings and returns a new string.
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2)); // 'Hello World'

//includes() - Determines whether one string may be found within another string, returning true or false as appropriate.
let str = 'Hello World';
console.log(str.includes('World')); // true

//indexOf() - Returns the index within the calling String object of the first occurrence of the specified value.
let str = 'Hello World';
console.log(str.indexOf('World')); // 6

//replace() - Returns a new string with some or all matches of a pattern replaced by a replacement.
let str = 'Hello World';
let newStr = str.replace('World', 'JavaScript');
console.log(newStr); // 'Hello JavaScript'

//split() - Splits a String object into an array of strings by separating the string into substrings.
let str = 'Hello World';
let arr = str.split(' ');
console.log(arr); // ['Hello', 'World']

//substring() - Returns the part of the string between the start and end indexes, or to the end of the string.
let str = 'Hello World';
console.log(str.substring(0, 5)); // 'Hello'

//toLowerCase() - Returns the calling string value converted to lowercase.
let str = 'Hello World';
console.log(str.toLowerCase()); // 'hello world'

//toUpperCase() - Returns the calling string value converted to uppercase.
let str = 'Hello World';
console.log(str.toUpperCase()); // 'HELLO WORLD'

//trim() - Removes whitespace from both ends of a string.
let str = '   Hello World   ';
console.log(str.trim()); // 'Hello World'
