#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 - 1); //generate number
//user guess number
const answers = await inquirer.prompt([
    { name: "guess", type: "number", message: "Guess a number between 1 and 10:" },
]);
// condition
if (answers.guess === randomNumber) {
    console.log("Congratulation: you are win");
}
else {
    console.log("you are lost, you guess wroung number, please try again.");
}
console.log(answers);
