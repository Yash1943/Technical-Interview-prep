// Function Overriding means redefining a function in a child class or subclass that already exists in a parent class.

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak(); // Dog barks
