// Object.create() example a
// simple object with some properties
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I 
              studying?: ${this.isStudying}.`);
  },
};
// Object.create() method
const me = Object.create(coder);
console.log(me); // {}
console.log(coder); // { isStudying: false, printIntroduction: [Function] }

// "name" is a property set on "me", but not on "coder"
me.name = "Mukul";

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();
