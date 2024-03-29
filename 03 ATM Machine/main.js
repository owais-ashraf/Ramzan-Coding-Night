#! /usr/bin/env node
import inquirer from "inquirer";
let myBal = 10000; //This is a Dollar amount
let myPin = 1234; // pin code;
let pinAnswer = await inquirer.prompt //ask person to enter a code
([
    {
        name: "pin",
        message: "Please enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    // if pin code is correct if block execute
    console.log(`Your balance is ${myBal}`);
    let action = await inquirer.prompt([
        {
            name: "actionPerform",
            message: "Select one option: ",
            type: "list",
            choices: ["Withdrawal", "fastCash", "UtilityBill"],
        },
    ]);
    if (action.actionPerform === "Withdrawal") {
        let WithdrawalAmount = await inquirer.prompt([
            {
                name: "Withdrawal",
                message: "Please enter an amount to withdraw cash: ",
                type: "number",
            },
        ]);
        if (WithdrawalAmount.Withdrawal <= myBal) {
            console.log(`You have entered ${WithdrawalAmount.Withdrawal}`);
            console.log("Your remaining bal is ", myBal - WithdrawalAmount.Withdrawal);
        }
        else {
            console.log("Insufficient Balance ");
        }
    }
    else if (action.actionPerform === "fastCash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Enter select an amount to withdraw: ",
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "25000"],
            },
        ]);
        if (fastCashAmount.fastCash <= myBal) {
            if (fastCashAmount.fastCash === "1000") {
                console.log(`You have select ${fastCashAmount.fastCash}`);
                console.log("Your remaining bal is ", myBal - fastCashAmount.fastCash);
            }
            else if (fastCashAmount.fastCash === "2000") {
                console.log(`You have select ${fastCashAmount.fastCash}`);
                console.log("Your remaining bal is ", myBal - fastCashAmount.fastCash);
            }
            else if (fastCashAmount.fastCash === "5000") {
                console.log(`You have select ${fastCashAmount.fastCash}`);
                console.log("Your remaining bal is ", myBal - fastCashAmount.fastCash);
            }
            else if (fastCashAmount.fastCash === "10000") {
                console.log(`You have select ${fastCashAmount.fastCash}`);
                console.log("Your remaining bal is ", myBal - fastCashAmount.fastCash);
            }
            else if (fastCashAmount.fastCash === "25000") {
                console.log(`You have select ${fastCashAmount.fastCash}`);
                console.log("Your remaining bal is ", myBal - fastCashAmount.fastCash);
            }
            else {
                console.log("Please choose a valid option");
            }
        }
        else {
            console.log("Insufficient Balance ");
        }
    }
    else if (action.actionPerform === "UtilityBill") {
        let billCompany = await inquirer.prompt({
            name: "UtilityBill",
            message: "Select company",
            type: "list",
            choices: ["KE", "SSGC", "PTCL"],
        });
        if (billCompany.UtilityBill === "KE") {
            console.log("You are going to Pay Electric Bill");
        }
        else if (billCompany.UtilityBill === "SSGC") {
            console.log("You are going to Pay Gas Bill");
        }
        else {
            console.log("You are going to pay Telephone bill");
        }
    }
    else {
        console.log("Invalid Option");
    }
}
else {
    console.log("Invalid Code");
}
