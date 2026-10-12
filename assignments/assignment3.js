// Assignment 3: Conditional Logic Implementation

const score = 85;
let grade;
let status;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

switch (grade) {
  case "A":
  case "B":
  case "C":
    status = "Passed";
    break;
  default:
    status = "Failed";
}

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);