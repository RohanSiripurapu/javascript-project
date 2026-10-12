# JavaScript Curriculum: Student Assignments & Capstone Project

A comprehensive collection of practical JavaScript exercises and an integrated capstone project covering core JavaScript concepts — from variables and data types to functions, arrays, objects, and DOM-free console-based applications.

---

## 📁 Project Structure

```text
javascript-project/
├── assignments/
│   ├── assignment1.js          # Variables, Data Types, Console Operations
│   ├── assignment2.js          # Operators, Expressions, Input Handling
│   ├── assignment3.js          # Conditional Logic
│   ├── assignment4.js          # Loop Control Structures
│   ├── assignment5.js          # Functions & Scope
│   └── assignment6.js          # Arrays, Objects, Core Methods
├── capstone/
│   └── inventory-dashboard.js  # Interactive Product Inventory Dashboard
├── .gitignore
├── package.json
└── README.md
```

---

## 📋 Assignments Overview

| # | Topic | Key Concepts |
| --- | ------- | -------------- |
| 1 | Variables, Data Types, Console Operations | `var`, `let`, `const`, `typeof`, template literals |
| 2 | Operators, Expressions, Input Handling | `prompt()`, `Number()`, arithmetic & assignment operators |
| 3 | Conditional Logic Implementation | `if...else`, `switch`, ternary operator |
| 4 | Loop Control Structures | `for`, `while`, `do...while`, `break`, `continue` |
| 5 | Function Architecture and Scope | Function declarations, arrow functions, default params, block scope |
| 6 | Arrays, Objects, Core Methods | `forEach()`, `filter()`, `map()` |

---

## 🚀 Capstone Project

### Interactive Product Inventory & Analytics Dashboard

A console-based application that integrates **all core JavaScript concepts** into one comprehensive program.

**Core Features:**

1. **Data & Input Initialization** — Prompts the user for a new product name and price using `prompt()`, converting inputs explicitly, and stores them in an array of objects alongside pre-existing items.
2. **Control Flow & Conditional Evaluation** — Uses `if...else` and `switch` blocks to validate input data and assign category badges (`Budget`, `Standard`, `Premium`) based on dynamic price thresholds.
3. **Loops & Flow Control** — Uses loops with `break`/`continue` statements to search through the inventory and handle bad or missing user inputs cleanly.
4. **Functions & Scope** — Implements regular functions and arrow functions to calculate total inventory statistics with secure local scoping.
5. **Array Methods & Iteration** — Leverages `forEach()` to log final inventory sheets, `filter()` to isolate items matching specific criteria, and `map()` to produce a transformed report summary.

**Sample Output:**

```text
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
```

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RohanSiripurapu/javascript-project.git
   cd javascript-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This installs `prompt-sync` for handling user input in Node.js.

---

## ▶️ How to Run

### Run Individual Assignments

```bash
node assignments/assignment1.js
node assignments/assignment2.js
node assignments/assignment3.js
node assignments/assignment4.js
node assignments/assignment5.js
node assignments/assignment6.js
```

### Run the Capstone Project

```bash
node capstone/inventory-dashboard.js
```

Or use the npm shortcuts:

```bash
npm run a1        # Assignment 1
npm run capstone  # Capstone project
```

> 💡 **Note:** `prompt()` is a browser API. For Node.js, assignments using input handling rely on the `prompt-sync` package, which is already configured.

---

## 📚 Learning Outcomes

By completing these assignments and the capstone project, I have demonstrated:

- ✅ Understanding of JavaScript variable declarations and data types
- ✅ Proficiency with operators, expressions, and explicit type conversion
- ✅ Mastery of conditional logic (`if...else`, `switch`, ternary)
- ✅ Knowledge of all loop types and flow-control statements
- ✅ Ability to write reusable functions with proper scoping
- ✅ Skill in manipulating arrays and objects using modern ES6+ methods
- ✅ Integration of all concepts into a single real-world application

---

## 📦 Dependencies

| Package       | Purpose                           |
|---------------|-----------------------------------|
| `prompt-sync` | Synchronous user input in Node.js |

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## 👤 Author

<!-- cspell: disable -->
Rohan Siripurapu

- GitHub: [@RohanSiripurapu](https://github.com/RohanSiripurapu)
<!-- cspell: enable -->

---

## 🙏 Acknowledgments

- Curriculum designed as part of a comprehensive JavaScript learning path
- Inspired by real-world inventory management systems
