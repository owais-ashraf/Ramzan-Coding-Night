#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 10 + 1);
const GuessNumber = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    }
]);
if (GuessNumber.userGuessNumber === RandomNumber) {
    console.log("Congratulation you win");
}
else {
    console.log("you lose, Please guess again");
}
