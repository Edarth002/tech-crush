//Logic to check Status based on User Age

export default function checkAge(inputAge) {
  const age = parseInt(inputAge);
  let status;

  if (age >= 18) {
    status = "Adult";
    return status;
  } else {
    status = "minor";
    return status;
  }
}
