function getComputerChoice(){
    let options = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomString = options[randomIndex];

    return randomString
}

console.log(getComputerChoice());

