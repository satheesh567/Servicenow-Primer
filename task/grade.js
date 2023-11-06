// Prompt the user for their numerical grade
const numericalGrade = parseInt(prompt("Enter your numerical grade (0-100):"), 10);

// Check and determine the letter grade
let letterGrade;

if (numericalGrade >= 90) {
  letterGrade = "A";
} else if (numericalGrade >= 80) {
  letterGrade = "B";
} else if (numericalGrade >= 70) {
  letterGrade = "C";
} else if (numericalGrade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}

// Display the result
console.log(`Your letter grade is: ${letterGrade}`);
