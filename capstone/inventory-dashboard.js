// Capstone: Interactive Product Inventory & Analytics Dashboard

const prompt = require('prompt-sync')();

// 1. Data & Input Initialization
let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");

const newName = prompt("Enter new product name: ");
const newPrice = Number(prompt("Enter product price: "));

if (!newName || isNaN(newPrice) || newPrice <= 0) {
  console.log("Invalid input. Skipping product addition.");
} else {
  inventory.push({ name: newName, price: newPrice });
  console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]`);
}

// 2. Category badge assignment function
function getCategory(price) {
  if (price < 50) return "Budget";
  else if (price < 500) return "Standard";
  else return "Premium";
}

// 3. Loop through with break/continue demonstration (validation scan)
console.log("\n--- Validating Inventory Items ---");
for (let i = 0; i < inventory.length; i++) {
  if (!inventory[i] || !inventory[i].name) {
    console.log(`Skipping invalid item at index ${i}`);
    continue;
  }
  if (inventory[i].price < 0) {
    console.log(`Breaking: negative price found`);
    break;
  }
}

// 4. Functions & Scope: total value calculator
const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

// 5. Array Methods
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

const affordableItems = inventory.filter(i => i.price < 200).map(i => i.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems)}`);

const report = inventory.map(i => `${i.name.toUpperCase()}: $${i.price}`);
console.log(`Formatted Report List: ${JSON.stringify(report)}`);