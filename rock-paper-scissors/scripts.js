const btns = document.querySelectorAll("button");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
    playRound();
  });
});

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

function getHumanChoice() {
  let human = prompt(`Pick a hand`);

  return human;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  console.log(`Initiate Game`);

  function playRound() {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice().toLowerCase();
    console.log(computerSelection);
    console.log(humanSelection);

    if (computerSelection == humanSelection) {
      console.log(
        `It's a tie you picked ${humanSelection} computer ${computerSelection}`,
      );
      tieScore++;
      console.log(
        `The score is Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`,
      );
    } else if (
      (humanSelection == "paper" && computerSelection == "rock") ||
      (humanSelection == "rock" && computerSelection == "scissors") ||
      (humanSelection == "scissors" && computerSelection == "paper")
    ) {
      console.log(
        `Human WINS human ${humanSelection} computer ${computerSelection}`,
      );
      humanScore++;
      console.log(
        `The score is Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`,
      );
    } else {
      console.log(
        `Computer WINS human ${humanSelection} computer ${computerSelection}`,
      );
      computerScore++;
      console.log(
        `The score is Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`,
      );
    }
  }
  // for (let i = 0; i < 2; i++) {
  //   console.log(`Round ${i + 1}`);
  //   playRound();
  // }
}
playGame();
