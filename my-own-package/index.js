//Application for age Determination
import { stdin } from "process";
import colors from "colors";

import checkAge from "./ageCheck.js";
import formatMessage from "./userInfo.js";

console.log(colors.red("Input your age: "));

stdin.once("data", (ageInput) => {
  const age = parseInt(String(ageInput));

  const status = checkAge(age);

  const message = formatMessage(age, status);

  if (status == "Adult") {
    console.log(colors.green(message));
  } else {
    console.log(colors.blue(message));
  }

  process.exit();
});
