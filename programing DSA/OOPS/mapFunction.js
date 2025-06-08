let paradigms = ["object oriented", "Processure Oriented", "Functional Oriented"];
let reverse = (item) => item.split("").reverse().join("");
console.log(reverse("Hello"));
console.log(paradigms.map(reverse))
