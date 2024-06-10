#! /usr/bin/env node

import inquirer from "inquirer";
console.log("welcome to simple calculatr");

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

//conditional statements
if (answer.operator === "addition"){
    console.log( answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction"){
    console.log( answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication")
    console.log( answer.firstnumber * answer.secondnumber);
else if (answer.operator === "division"){
    console.log( answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid number");
}
