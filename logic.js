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
