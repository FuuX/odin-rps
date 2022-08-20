function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)]
    return choice;
}


function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))
        console.log("You won!" + " " + playerSelection + " beats " + computerSelection);
    else {
        console.log("Lost!");
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

