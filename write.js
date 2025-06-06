//Array

let fruits = [
  "oranges",
  "apples",
  "mangoes",
  5,
  8.9,
  true,
  null,
  [1, true, "hill"],
  { name: "John", age: 30 },
];

console.log("fruits:", fruits);
console.log("the very fruit is:", fruits[8]);

// // objects
// let car = {
//   manufacturer: "Toyota",
//   model: "camry",
//   color: "red",
//   year: 2020,
//   isElectric: false,
//   wheels_year: [2020, 2021, 2022, 2023],
//   owner: {
//     name: "John Doe",
//     age: 30,
//     address: "123 Main St",
//     phone: "555-1234",
//   },
// };

// console.log("car:", car);
// console.log("what is the car owner info:", car.owner.name)

// const numbers = [1, 2, 3, 4, 5, 6.7, 8.8];

// const letters = ["a", "b", "c", "d", "e", "f", "g", `h`, 'i'];

// const boolean = [true, false, true, false, true, false];

// const nuller = [null, null, null, null, null, null];

// let mix = [1, "a", true, null, 1.5, "b", false, null, 2, "c", true, null];

// let mixTwo = [
//   1,
//   [1, "t", false],
//   248.99,
//   343,
//   true,
//   {
//     name: "John Doe",
//     age: 30,
//     address: "123 Main St",
//     phone: "555-1234",
//   },
// ];

// // Objects

// const car = {
//   manufacturer: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   color: "red",
//   isElectric: false,
//   documents: null,
//   price: 20000.99,
//   seller_data: ["John Doe", "123 Main St", "555-1234"],
//   owner: {
//     name: "John Doe",
//     age: 30,
//     address: "123 Main St",
//     phone: "555-1234",
//   },
// };

console.log("car:", car);

console.log("mixTwo:", mixTwo);

//Array

// let fruits = [
//   "oranges",
//   "apples",
//   "mangoes",
//   5,
//   8.9,
//   true,
//   null,
//   [1, true, "hill"],
//   { name: "John", age: 30 },
// ];

// // console.log("fruits:", fruits);
// console.log("the very fruit is:", fruits[8]);

// objects
// let car = {
//   manufacturer: "Toyota",
//   model: "camry",
//   color: "red",
//   year: 2020,
//   isElectric: false,
//   wheels_year: [2020, 2021, 2022, 2023],
//   owner: {
//     name: "John Doe",
//     age: 30,
//     address: "123 Main St",
//     phone: "555-1234",
//   },
// };

console.log("car:", car);
console.log("what is the car owner info:", car.owner.name);

const numbers = [1, 2, 3, 4, 5, 6.7, 8.8];

const letters = ["a", "b", "c", "d", "e", "f", "g", `h`, "i"];

const boolean = [true, false, true, false, true, false];

const nuller = [null, null, null, null, null, null];

let mix = [1, "a", true, null, 1.5, "b", false, null, 2, "c", true, null];

let mixTwo = [
  1,
  [1, "t", false],
  248.99,
  343,
  true,
  {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "555-1234",
  },
];

// Objects

const car = {
  manufacturer: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "red",
  isElectric: false,
  documents: null,
  price: 20000.99,
  seller_data: ["John Doe", "123 Main St", "555-1234"],
  owner: {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "555-1234",
  },
};

console.log("car:", car);

console.log("mixTwo:", mixTwo);

import http from "http";
import url from "url";

const port = "3000";
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  switch (parsedUrl.pathname) {
    case "/":
      res.setHeader("Content-Type", "text/plain"); //specify response type as plain text
      res.end("Hello, World!\n"); // send response
      break;
    case "/home":
      res.setHeader("Content-Type", "application/json"); //specify response type as json
      res.end(JSON.stringify({ message: "Hello there!" })); // send response
      break;
    case "/user":
      res.setHeader("Content-Type", "application/json"); //specify response type as json
      res.end(JSON.stringify({ name: "John", age: 30 })); // send response
      break;
    default:
      res.statusCode = 404; //specify status codes
      res.end(JSON.stringify({ error: "404 Not Found" })); // send response
      break;
  }
});

server.listen(port, () => {
  console.log("Server is Running");
});
