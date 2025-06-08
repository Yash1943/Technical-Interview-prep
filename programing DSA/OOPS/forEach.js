let arr = [];
arr.push("apple");
arr.push("banana");
arr.push("orange");
//console.log(arr);
//arr.forEach((value) => console.log(value));

let ItemLog = (value) => console.log(value);

//without using Foreach
// arr.forEach(ItemLog);

let Arrnew = (value, index) =>{
    let n = index + 1;
    console.log(String(n)+ ". " + value);
}

// Arrnew(arr[3] ,3)

arr.forEach(Arrnew)