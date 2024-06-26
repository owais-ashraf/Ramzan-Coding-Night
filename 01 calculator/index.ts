#! /usr/bin/env node
// 👆 is line ko SHABANG bh bolte hain, hashtag ka sha aur bang exclamation mark ko bhi bolte hain
import inquirer from 'inquirer';

const answer = await inquirer.prompt([ //is me object me 3 cheezain compulsory hain (name, message, type)
  {
    message: "Enter First Number: ",
    type: "number",
    name: "FirstNumber"
  },
  { 
    message: "Enter Second Number: ",
    type: "number", 
    name: "SecondNumber" 
  },
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


