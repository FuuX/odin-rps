const buttons = document.querySelectorAll('input')

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        console.log("You won!" + " " + playerSelection + " beats " + computerSelection);
        score1++;
    }
    else if(playerSelection === computerSelection) {
        console.log("No way! It's a draw");
    }
    else {
        console.log("You lose!" + " " + computerSelection + " beats " + playerSelection);
        score2++;
    }
  }

  let score1 = 0;
  let score2 = 0;

  buttons.forEach(button =>{
    button.addEventListener('click', function(){
        const computerSelection = getComputerChoice();
        playRound(button.value, computerSelection);
        console.log("Current score: " + score1 + " : " + score2);
        if (score1 == 5 ) {
            console.log("Player won!");
            buttons.forEach(elem => {
                elem.disabled = true
            })
        } else if (score2 == 5) {
            console.log("Computer won!");
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
    })
})