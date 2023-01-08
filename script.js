window.onload = game();
let playerScore = 0;
let computerScore = 0;

const rockContainer = document.querySelector('.rock');
const paperContainer = document.querySelector('.paper');
const scissorsContainer = document.querySelector('.scissors');

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

            if ((computerScore === 5) || (playerScore ===5)){
                if (computerScore === 5){
                    resultsContainer.innerHTML = 'You were defeated! <button class = "reset" onclick="reset()">Click for rematch!</button>';
                } else if (playerScore === 5){
                    resultsContainer.innerHTML = 'You were victorious! <button class = "reset" onclick="reset()">Click for rematch!</button>';
                }

                rockContainer.setAttribute("disabled", 1);
                paperContainer.setAttribute("disabled", 1);
                scissorsContainer.setAttribute("disabled", 1);
                
            }else{
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

function reset(){
    playerScore = 0;
    computerScore = 0;

    const resultsContainer = document.querySelector('.results');
    const msgContainer = document.querySelector('.message');

    resultsContainer.innerText = "Player Score: 0 Computer Score: 0";
    msgContainer.innerText = "You can win, draw, or lose a round. The first to five wins!";

    rockContainer.removeAttribute("disabled");  
    paperContainer.removeAttribute("disabled");  
    scissorsContainer.removeAttribute("disabled");

}