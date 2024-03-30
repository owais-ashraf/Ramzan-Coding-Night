#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "tasks",
            message: "What do you want to add? ",
            type: "input",
        },
        {
            name: "addMore",
            message: "What do you want to add more",
            type: "confirm",
            default: "false",
        }
    ]);
    todos.push(addTask.tasks);
    condition = addTask.addMore;
    console.log(todos);
}
