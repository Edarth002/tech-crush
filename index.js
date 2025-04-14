// console.log(5==5)

// console.log(5===5)

// console.log(5=="5")

// console.log(5==="5")

// console.log(5!=5)

// console.log(5!==5)

// console.log(5!="5")

// console.log(5!=="5")

let v = 5;
let w = 5;
// let x = 5;
// let y = 7;
// let z = 7;

// console.log(w == x || y == z)
// console.log(w == x && !(y == z))

let age = 17;
let message = age >= 18 ? "Adult" : "Minor";
// console.log(message); // Outputs: "Adult"

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array3 = [...array1, ...array2];

// console.log(array3);

let rep = "muhammed";

let nameRep = rep ?? "no rep found";
// console.log(nameRep); // Outputs: "muhammed"

let x = 5;
let y = 5;
let z = 6;

// if (x == y) {
//   console.log("x and y are equal");
// }

// if (x == z) {
//   console.log("x and z are also equal");
// }

// if (x == y) {
//   console.log("x and y are equal");
// } else if (x == z) {
//   console.log("x and z are equal");
// } else {
//   console.log("x and z are not equal");
// }

// if(x==y && x==z && y==z){
//   console.log("x and y are equal");
// }

// let payments = "credit card";
// let paymentAmount = 1000;
// switch (payments) {
//   case "credit card":
//     console.log("Ask for CVV");
//     if (paymentAmount === 1000) {
//       console.log("Ask for VAT");
//     }
//     break;
//   case "paypal":
//     console.log("Ask for paypal id");
//     break;
//   case "loan":
//     console.log("ask loan provider");
//     break;
//   default:
//     console.log("Payment method not supported");
//     break;
// }

// let cars = ["BMW", "Mercedes", "Toyota", "Honda", "Nissan", "Bentley"];

// console.log("car number three:", cars[2]);

// for (let index = 3; index <= 5; index++) {
//   console.log("index:", cars[index]);
// }

// let index = 0;

// while (index < 5) {
//   console.log("index:", index);
//   index++;
// }

// let index = 6;

// do {
//   console.log("index:", index);
//   index++;
// } while (index < 5);

let cars = ["BMW", "Mercedes", "Toyota", "Honda", "Nissan", "Bentley"];

// for (let car of cars){
//   if(car === "Honda") {
//     // console.log("car:", car);
//     continue;
//   }

//   console.log("car:", car);
// }

// for (let index = 3; index <= 5; index++) {
//   console.log("index:", cars[index]);
// }

let student = {
  name: "muhammed",
  age: 60,
  isStudent: true,
};

// console.log("student:", student.name);
// console.log("age:", student['age']);

// for (let key in student) {
//   console.log("key:", key);
//   console.log("value:", student[key]);
// }

// let students = [
//   { name: "muhammed", age: 60, isStudent: true },
//   { name: "Gideon", age: 30, isStudent: true },
//   { name: "Lekah", age: 30, isStudent: false },
//   { name: "Shalom", age: 30, isStudent: false },
// ];

// let count = 1;
// for(let student of students){
//   // console.log(`student ${count}:`, student);

//   for(let studentInfo in student){
//     console.log(`student ${count}: ${studentInfo}:`, student[studentInfo]);
//   }

//   // if(student.isStudent){
//   //   console.log(`student ${count}: ${student.name} is a student and he is ${student.age} years old`);
//   //   if(student.name === "muhammed"){
//   //     console.log('And he is the class rep')
//   //   }
//   // }else{
//   //   console.log(`student ${count}: ${student.name} is not a student and he is ${student.age} years old`);
//   // }

//   count++;
// }

let students = [
  { name: "muhammed", age: 60, isStudent: true },
  { name: "Gideon", age: 30, isStudent: true },
  { name: "Lekah", age: 30, isStudent: false },
  { name: "Shalom", age: 30, isStudent: false },
];

let count = 1;
for (let studentIndex = 1; studentIndex < students.length; studentIndex++) {
  // console.log(`student ${count}:`, student);

  for (let studentInfo in students[studentIndex]) {
    console.log(
      `student ${count}: ${studentInfo}:`,
      students[studentIndex][studentInfo]
    );
  }

  // if(student.isStudent){
  //   console.log(`student ${count}: ${student.name} is a student and he is ${student.age} years old`);
  //   if(student.name === "muhammed"){
  //     console.log('And he is the class rep')
  //   }
  // }else{
  //   console.log(`student ${count}: ${student.name} is not a student and he is ${student.age} years old`);
  // }

  count++;
}
