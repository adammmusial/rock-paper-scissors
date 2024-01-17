function getComputerChoice(){
    let options = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomString = options[randomIndex];

    return randomString
}


function playRound(playerSelection){

    computerSelection = getComputerChoice()
    playerSelectionFiltered = playerSelection.toLowerCase().trim()

    console.log(`You chose ${playerSelectionFiltered}`)
    console.log(`Computer chose ${computerSelection}`)

    if (playerSelectionFiltered === computerSelection){
        return console.log("Tie! Play again to find out winner") 
    }
    else if (playerSelectionFiltered === "scissors" && computerSelection === "paper"){
        return console.log("You win! Scissors beats paper")
    }

    else if (playerSelectionFiltered === "paper" && computerSelection === "rock"){
        return console.log ("You win! Paper beats rock")
    }

    else if (playerSelectionFiltered === "rock" && computerSelection === "scissors"){
        return console.log ("You win! Rock beats scissors")
    }

    else if (playerSelectionFiltered === "paper" && computerSelection === "scissors"){
        return console.log ("You lose! Scissors beats paper")
    }

    else if (playerSelectionFiltered === "rock" && computerSelection === "paper"){
        return console.log ("You lose! Paper beats rock")
    }

    else if (playerSelectionFiltered === "scissors" && computerSelection === "rock"){
        return console.log ("You lose! Rock beats scissors")
    }

    return console.log("Inputted wrong name, please input: rock, paper or scissors")

}

console.log(game("paper"))