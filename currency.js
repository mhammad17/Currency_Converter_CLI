import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select currency Which You Want To Convert From",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: "Select currency Which You Want To Convert To",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "number",
        type: "number",
        message: "How much you want to convert",
    },
]);
let fromAmount = currency[input.from];
let toAmount = currency[input.to];
let userAmount = currency[input.number];
let baseAmount = userAmount / fromAmount;
let covertedAmount = baseAmount * toAmount;
console.log(`Your Converted Amount is ${covertedAmount}`);
