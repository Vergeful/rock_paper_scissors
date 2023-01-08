window.onload = game();

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

function game(){
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>{

        button.addEventListener('click', () => {
            playerSelection = button.innerText;
            roundResult = playRound(playerSelection, getComputerChoice());
            let winStatus = winPosition(roundResult);
            let loseStatus = losePosition(roundResult);

            if (winStatus){
                playerScore += 1;
            }else if (loseStatus){
                computerScore += 1;
            }

            const resultsContainer = document.querySelector('.results');
            const msgContainer = document.querySelector('.message');

            msgContainer.innerText = roundResult;

            if (computerScore === 5){
                resultsContainer.innerText = "The computer had beaten you! You are a loser!";
            } else if (playerScore === 5){
                resultsContainer.innerText = "You have emerged victorious!";
            }
            else{
                resultsContainer.innerText = `Player score: ${playerScore} Computer score: ${computerScore}`;
            }
            
        });
    });
}

function winPosition(roundResult){
    let position = roundResult.search("Win");
    if (position === -1){
        return false;
    }else{
        return true;
    }
}

function losePosition(roundResult){
    let position = roundResult.search("Lose");
    if (position === -1){
        return false;
    }else{
        return true;
    }
}