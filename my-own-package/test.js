export default function greet() {
  console.log("Hello! from test.js file");
}

const testVariable = 42;
export { testVariable as myVariable };
