// Assignment 2: Operators, Expressions, and Input Handling

const billInput = prompt("Enter the bill amount:");
const tipInput = prompt("Enter the tip percentage:");

const subtotal = Number(billInput);
const tipPercent = Number(tipInput);

const tipAmount = (subtotal * tipPercent) / 100;
let total = subtotal;
total += tipAmount;

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tipAmount}`);
console.log(`Total Amount to Pay: $${total}`);