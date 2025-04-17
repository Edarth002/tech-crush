function calculatorFunction(a, b, operation) {
  let result;

  switch (operation) {
    case "addition":
      result = a + b;
      break;
    case "subtraction":
      result = a - b;
      break;
    case "multiplication":
      result = a * b;
      break;
    case "division":
      if (b === 0) {
        return "Error: Division by zero";
      }
      result = a / b;
      break;
    case "modulus":
      if (b === 0) {
        return "Error: Division by zero";
      }
      result = a % b;
      break;
    case "exponential":
      result = a ** b;
      break;
    default:
      return "Invalid operation";
  }

  return result;
}

console.log(calculatorFunction(10, 2, "addition")); // Output: 12
console.log(calculatorFunction(10, 9, "subtraction")); //Output: 1
console.log(calculatorFunction(10, 2, "multiplication")); // Output: 20
console.log(calculatorFunction(5, 0, "division")); // Output: "Error: Division by zero"
console.log(calculatorFunction(40, 10, "modulus")); // Output: 0
console.log(calculatorFunction(2, 3, "exponential")); // Output: 8
