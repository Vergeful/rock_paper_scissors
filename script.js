function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    playerChoice = playerChoice.trim()
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice){
        return "Draw!";
    }

    if (playerChoice === "rock"){
        if (computerChoice === "paper"){
            return "You Lose! Paper beats Rock";
        }else if (computerChoice === "scissors"){
            return "You Win! Rock beats Scissors";
        }

    }else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            return "You Win! Paper beats Rock";
        }else if (computerChoice === "scissors"){
            return "You Lose! Scissors beats Paper";
        }

    }else if (playerChoice === "scissors"){
        if (computerChoice === "paper"){
            return "You Win! Scissors beats Paper";
        }else if (computerChoice === "rock"){
            return "You Lose! Rock beats Scissors";
        }
    }
}

