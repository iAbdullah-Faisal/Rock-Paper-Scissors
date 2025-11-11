function getComputerChoice() {
  let choices = Math.random();
  choices = choices * 3 + 1;
  choices = Math.floor(choices);
  if (choices === 1) {
    return "rock";
  } else if (choices === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    alert("Invalid choice! Please choose rock, paper, or scissors.");
  }
}

getHumanChoice(); // Example usage
