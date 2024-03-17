import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number: ", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number: ", type: "number", name: "SecondNumber" },
  {
    message: "Select one the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statement;
if (answer.operator === "addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}
