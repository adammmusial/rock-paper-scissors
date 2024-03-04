function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomString = options[randomIndex];

    return randomString
}


function playRound(playerSelection) {

    computerSelection = getComputerChoice()
    playerSelectionFiltered = playerSelection.toLowerCase().trim()

    if (playerSelectionFiltered === computerSelection) {
        resultMessage = "Tie! Play again to find out winner"
    } else if ((playerSelectionFiltered === "scissors" && computerSelection === "paper") ||
        (playerSelectionFiltered === "paper" && computerSelection === "rock") ||
        (playerSelectionFiltered === "rock" && computerSelection === "scissors")
    ) {
        resultMessage = `You win! ${playerSelectionFiltered.charAt(0).toUpperCase() + playerSelectionFiltered.slice(1)} beats ${computerSelection}.`;
    }

    else {
        resultMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelectionFiltered}.`;
    }

    alert(resultMessage)

}

function game() {
    console.log("Hi, this is Rock Paper Scissor Game in order to win this game you have to score five points, good luck!")


    const btn_rock = document.getElementById("rock")
    btn_rock.addEventListener("click", function () {playRound('rock')});

    const btn_paper = document.getElementById("paper")
    btn_paper.addEventListener("click", function () {playRound('paper')});

    const btn_scissors = document.getElementById("scissors")
    btn_scissors.addEventListener("click", function () {playRound('scissors')});
    // while (computerPoints < 5 && userPoints < 5) {

    //     let choice = prompt(`Game number ${gameNumber}! Choose your choice by typing rock paper o scissors"`);
    //     let result = playRound(choice)
    //     gameNumber++;

    //     if (result === "Computer") {
    //         computerPoints++;
    //     }
    //     else if (result === "User") {
    //         userPoints++;
    //     }
    //     else if (result === "User") {
    //         tiePoints++;
    //     }

    //     console.log(`User Points ${userPoints}!`)
    //     console.log(`Computer Points ${computerPoints}!`)
    //     console.log(`Tie Points ${tiePoints}!`)

    // }
    // if (computerPoints === 5) {
    //     return console.log('Computer Won! User Lost')
    // }
    // else if (userPoints === 5) {
    //     return console.log('User Won! Computer Lost')
    // }

}

game()