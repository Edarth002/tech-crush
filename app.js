// function ageVerification1(age, adultPresent) {
//   if (age >= 13 || adultPresent) {
//     console.log("You are permitted to watch this movie");
//   } else if (age < 13 && !adultPresent) {
//     console.log(
//       "You can only watch this movie with your parent or watch our other movies"
//     );
//   } else {
//     console.log("You are not permitted to watch this movie");
//   }
// }

// ageVerification1(10, true);
// ageVerification1(15, false);
// ageVerification1(12, false);
// ageVerification1(5, true);

// function ageVerification2(age, adultPresent) {
//   switch ((age, adultPresent)) {
//     case age >= 13 || adultPresent:
//       console.log("You are allowed to watch this movie");
//       break;

//     case age < 13 && !adultPresent:
//       console.log(
//         "You can only view this movie with your parent or view our other movies"
//       );
//       break;

//     default:
//       console.log("You are not allowed to watch this movie");
//       break;
//   }
// }

// ageVerification2(10, true);
// ageVerification2(15, false);
// ageVerification2(12, false);
// ageVerification2(5, true);
// function ageVerification1(age, adultPresent) {
//   if (age >= 13 || adultPresent) {
//     console.log("You are permitted to watch this movie");
//   } else if (age < 13 && !adultPresent) {
//     console.log(
//       "You can only watch this movie with your parent or watch our other movies"
//     );
//   } else {
//     console.log("You are not permitted to watch this movie");
//   }
// }

// ageVerification1(10, true);
// ageVerification1(15, false);
// ageVerification1(12, false);
// ageVerification1(5, true);

// function ageVerification2(age, adultPresent) {
//   switch ((age, adultPresent)) {
//     case age >= 13 || adultPresent:
//       console.log("You are allowed to watch this movie");
//       break;

//     case age < 13 && !adultPresent:
//       console.log(
//         "You can only view this movie with your parent or view our other movies"
//       );
//       break;

//     default:
//       console.log("You are not allowed to watch this movie");
//       break;
//   }
// }

// ageVerification2(10, true);
// ageVerification2(15, false);
// ageVerification2(12, false);
// ageVerification2(5, true);

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
