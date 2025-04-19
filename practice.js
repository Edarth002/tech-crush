function person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log(
      "Hello, my name is " + this.name + ". I am " + this.age + " years old"
    );
  };
}

const person1 = new person("John", 20);
const person2 = new person("Alice", 18);
// person1.greet();
// person2.greet();

const personPrototype = {
  greet() {
    console.log(
      "Hello, my name is " + this.name + ". I am " + this.age + " years old"
    );
  },
};

const John = Object.create(personPrototype);
John.height = "180cm";
John.name = "John";
John.age = 20;

Object.freeze(John);
const isFrozen = Object.isFrozen(John);
John.race = "black";
const keys = Object.keys(John);

// console.log(keys);
// console.log(isFrozen);

const clone = Object.assign({}, person1);

// console.log(person2);

//Functions
function counter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}
const myCounter = counter();
// console.log(myCounter.increment());

// console.log(myCounter.getCount());

// Classes
class Animal {
  constructor(
    name,
    classOfAnimal,
    color,
    numberOfLegs,
    habitat,
    modeOfMovement
  ) {
    this.name = name;
    this.classOfAnimal = classOfAnimal;
    this.color = color;
    this.numberOfLegs = numberOfLegs;
    this.habitat = habitat;
    this.modeOfMovement = modeOfMovement;
  }

  //Methods
  introduction = () => {
    console.log(
      `This is a ${this.color} ${this.name}. It belongs to the ${this.classOfAnimal} class, it has ${this.numberOfLegs} legs, moves from one place to another via ${this.modeOfMovement} and naturally dwells in ${this.habitat}`
    );
  };

  //Static methods
  static noOfLegs(numberOfLegs) {
    if (numberOfLegs <= 0) {
      return "This animal has no leg";
    } else return `This animal has ${numberOfLegs} legs`;
  }
}

const duck = new Animal(
  "duck",
  "amphibian",
  "white",
  2,
  "trees and mountaintops",
  "flight"
);

const snake = new Animal(
  "snake",
  "reptile",
  "black",
  0,
  "bushes, swamps and caves",
  "crawling"
);

// Private Fields
class BankAccount {
  #balance = 0; // Private field
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance)
      throw new Error("Insufficient funds, You be thief?");
    this.#balance -= amount;
  }
}
const account = new BankAccount(10000);
account.withdraw(1000); //Error: Insufficient funds, You be thief?
account.deposit(1500);

// OOP, inheriting characteristics from Parent Class Animal

class Dogs extends Animal {
  constructor(name, color, numberOfLegs, modeOfMovement, sound) {
    super(name, color, numberOfLegs, modeOfMovement);
    this.sound = sound;
  }
  introduction = () => {
    console.log(
      `This is a ${this.color} ${this.name}. It is a type of Dog, it has ${this.numberOfLegs} legs, moves from one place to another via ${this.modeOfMovement}, naturally dwells among humans and tends to ${this.sound} at strangers`
    );
  };
}

const germanshephard = new Dogs(
  "German Shephard",
  "Running",
  "brown",
  4,
  "Bark"
);

germanshephard.introduction();

//NPM
