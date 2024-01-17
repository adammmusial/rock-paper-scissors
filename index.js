function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomString = options[randomIndex];

    return randomString
}


function playRound(playerSelection) {

    computerSelection = getComputerChoice()
    playerSelectionFiltered = playerSelection.toLowerCase().trim()

    console.log(`User chosse ${playerSelectionFiltered}`)
    console.log(`Computer chose ${computerSelection}`)

    if (playerSelectionFiltered === computerSelection) {
        console.log("Tie! Play again to find out winner")
        return "Computer"
    }
    else if ((playerSelectionFiltered === "scissors" && computerSelection === "paper") ||
        (playerSelectionFiltered === "paper" && computerSelection === "rock") ||
        (playerSelectionFiltered === "rock" && computerSelection === "scissors")
    ) {
        console.log(`User wins! ${playerSelection} beats ${computerSelection}"`)
        return "User"
    }

    else {
        console.log("Computer Wins! Paper beats rock")
        return "Computer"
    }

}

function game() {
    console.log("Hi, this is Rock Paper Scissor Game in order to win this game you have to score five points, good luck!")

    let computerPoints = 0;
    let userPoints = 0;
    let tiePoints = 0
    let gameNumber = 1

    while (computerPoints < 5 && userPoints < 5) {

        let choice = prompt(`Game number ${gameNumber}! Choose your choice by typing rock paper o scissors"`);
        let result = playRound(choice)
        gameNumber++;

        if (result === "Computer") {
            computerPoints++;
        }
        else if (result === "User") {
            userPoints++;
        }
        else if (result === "User") {
            tiePoints++;
        }

        console.log(`User Points ${userPoints}!`)
        console.log(`Computer Points ${computerPoints}!`)
        console.log(`Tie Points ${tiePoints}!`)

    }
    if (computerPoints === 5) {
        return console.log('Computer Won! User Lost')
    }
    else if (userPoints === 5) {
        return console.log('User Won! Computer Lost')
    }



}

game()