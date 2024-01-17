function getComputerChoice(){
    let options = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomString = options[randomIndex];

    return randomString
}


function playRound(playerSelection){

    computerSelection = getComputerChoice()
    playerSelectionFiltered = playerSelection.toLowerCase().trim()

    console.log(`User chosse ${playerSelectionFiltered}`)
    console.log(`Computer chose ${computerSelection}`)

    if (playerSelectionFiltered === computerSelection){
        return console.log("Tie! Play again to find out winner") 
    }
    else if (playerSelectionFiltered === "scissors" && computerSelection === "paper"){
        return console.log("User wins! Scissors beats paper")
    }

    else if (playerSelectionFiltered === "paper" && computerSelection === "rock"){
        return console.log ("User wins! Paper beats rock")
    }

    else if (playerSelectionFiltered === "rock" && computerSelection === "scissors"){
        return console.log ("User wins! Rock beats scissors")
    }

    else if (playerSelectionFiltered === "paper" && computerSelection === "scissors"){
        return console.log ("Computer Wins! Scissors beats paper")
    }

    else if (playerSelectionFiltered === "rock" && computerSelection === "paper"){
        return console.log ("Computer Wins! Paper beats rock")
    }

    else if (playerSelectionFiltered === "scissors" && computerSelection === "rock"){
        return console.log ("Computer Wins! Rock beats scissors")
    }

    return console.log("Inputted wrong name, please input: rock, paper or scissors")

}

function game(){
    console.log("Hi, this is Rock Paper Scissor Game in order to win this game you have to score five points, good luck!")

    let computerPoints = 0 ;
    let userPoints = 0 ;
    let tiePoints = 0
    let gameNumber = 1

    for(let i=1; i<=9; i++){
    
        let choice = prompt(`Game number ${gameNumber}! Choose your choice by typing rock paper o scissors"`);

        gameNumber++

        console.log(`User Points ${userPoints}!`)
        console.log(`Computer Points ${computerPoints}!`)
        console.log(`Tie Points ${tiePoints}!`)


        result = playRound(choice)
        result = String(result)
        
        if (result.includes("Computer")){
            computerPoints++
        }
        else if (result.includes("User")){
            userPoints++
        }
        else if (result.includes("Tie")){
            tiePoints++
        } 

    }
    if (computerPoints === 5) {
        return console.log('Computer Won! User Lost')
    }
    else if (userPoints === 5) {
        return console.log('User Won! Computer Lost')
    }



}

game()