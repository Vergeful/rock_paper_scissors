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
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection)
        let winStatus = winPosition(roundResult);
        let loseStatus = losePosition(roundResult);

        if (winStatus){
            playerScore += 1;
        }else if (loseStatus){
            computerScore += 1;
        }
        console.log(roundResult)
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)

        if (i === 4){
            if (playerScore > computerScore){
                console.log("Player wins!")
            }else{
                console.log("Computer wins")
            }
        }
    }
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