let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    alert(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
  }
  alert(
    "Game Over! Final Score - You: " +
      humanScore +
      ", Computer: " +
      computerScore
  );
  if (humanScore > computerScore) {
    alert("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    alert("Sorry! The computer won the game! Learn how to play better, human!");
  } else {
    alert("It's a tie game!");
  }
}

playGame();
