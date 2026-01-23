const btns = document.querySelectorAll("button");
const score = document.querySelector(".score");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.value;
    playRound(humanSelection);
  });
});
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let gamesPlayed = 0;

function getComputerChoice() {
  let choice = "";
  let number = Math.floor(Math.random() * 100);

  if (number <= 33) {
    choice = "rock";
  } else if (33 < number && number <= 66) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function playRound(humanSelection) {
  let computerSelection = getComputerChoice();

  if (computerSelection == humanSelection) {
    tieScore++;
    gamesPlayed++;
    score.textContent = `The score is Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`;
  } else if (
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "scissors" && computerSelection == "paper")
  ) {
    humanScore++;
    gamesPlayed++;

    score.textContent = `The score is Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`;
  } else {
    computerScore++;
    gamesPlayed++;
    score.textContent = `The score is Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`;
  }
  console.log(`Games played ${gamesPlayed}`);
  // if (gamesPlayed == 5) {
  // }
}
