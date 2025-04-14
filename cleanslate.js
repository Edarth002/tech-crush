// let list_of_animals_with_four_legs = [];
// let list_of_animals_without_four_legs = [];

// let all_animals = [
//   { name: "dog", legs: 4 },
//   { name: "cat", legs: 4 },
//   { name: "bird", legs: 2 },
//   { name: "fish", legs: 0 },
//   { name: "snake", legs: 0 },
// ];

// for (let animal in all_animals) {
//   if (all_animals[animal].legs === 4) {
//     list_of_animals_with_four_legs.push(all_animals[animal].name);
//   } else {
//     list_of_animals_without_four_legs.push(all_animals[animal].name);
//   }
// }

// list_of_animals_without_four_legs.pop()

// console.log(list_of_animals_with_four_legs.join(", "));
// console.log(list_of_animals_without_four_legs.join(", "));

// let car = { color: "red", make: "Toyota", model: "Corolla" };

// console.log(car)

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hello, my name is ${this.name}`);
//   };
// }
// const john = new Person("John", 30);
// console.log(john)

// Using Object.create()
// const personProto = {
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// const jane = Object.create(personProto);
// jane.name = "Jane";
// jane.age = 28;

// console.log(jane)

// let car = { color: "red", make: "Toyota", model: "Corolla" };

let mrJohn = {
  child_one: "Muhammed",
  child_two: "Gideon",
  child_three: "Rachael",
  child_four: "Kesibo",
  child_five: "Dan",
};

// console.log(mrJohn.child_three)
// console.log(mrJohn['child_three'])

// mrJohn.child_six = "Shalom";
// mrJohn.child_seven = "Sharon";
// mrJohn.child_eight = "Shasha";

// delete mrJohn.child_eight;

// console.log(mrJohn)
// function add(a, b){
//     return a + b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function operate(a, b, operation) {
//   return operation(a, b);
// }

// let addition = operate(5, 3, add); // 8
// let multiplication = operate(5, 3, multiply); // 15

// console.log("addition of 3 and 5:", addition);
// console.log("multiplication of 3 and 5:", multiplication);

//closures
// function counter() {
//   let count = 0;
//   return {
//     increment() {
//       count++;
//       return count;
//     },
//     decrement() {
//       count--;
//       return count;
//     },
//     getCount() {
//       return count;
//     },
//   };
// }

// const myCounter = counter();
// let inc = myCounter.increment(); // 1
// let inc2 = myCounter.increment(); // 2
// let inc3 = myCounter.increment(); // 2
// let count = myCounter.getCount(); // 2
// console.log(inc, inc2, inc3, count)

// function animal(name, sound) {
//     this.name = name;
//     this.sound = sound;
// }

class Animal{
    constructor(name, sound, legs = 2) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
    }
    
    makeSound() {
        return `${this.name} makes a ${this.sound} sound`;
    }

        
    numberOfLegs(message) {
        return `${this.name} has ${this.legs} legs. ${message}`;
    }
}

let dog = new Animal("Dog", "Bark", 4);
let dogSound = dog.makeSound();
let dogLegs = dog.numberOfLegs("And it can run");

let cat = new Animal("Cat", "Meow");
let catSound = cat.makeSound();
let catLegs= cat.numberOfLegs();

console.log(`${dogLegs}\n${catLegs}`);