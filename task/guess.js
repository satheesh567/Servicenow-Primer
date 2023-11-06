
const min = 1;
const max = 100;
const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let isCorrect = false;

while (!isCorrect) {
  
  const userGuess = parseInt(prompt(`Guess the number between ${min} and ${max}:`), 10);

  if (userGuess === null) {
    alert("You canceled the game.");
    break;
  }

  attempts++;

  // Check if the user's guess is correct
  if (userGuess === randNum) {
    isCorrect = true;
    alert(`Congratulations! You guessed the number ${randNum} in ${attempts} attempts.`);
  } else if (userGuess < secretNumber) {
    alert("Try a higher number.");
  } else {
    alert("Try a lower number.");
  }
}
