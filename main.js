console.log("Hello World");

let computerScore = 0;
let humanScore = 0;
function getComputerChoice(){
    value = Math.floor((Math.random()*3)+1);
    
    const choices = ["rock", "paper", "scissors"];
    return choices[value];
}

function getHumanChoice(){
    let guess = prompt("Enter your choice: ");
    return guess;
}

function playRound(humanChoice, computerChoice){
    let humanChoice = humanChoice.toLowerCase();
    if ((computerChoice = "rock") && (humanChoice = "scissors")){
        console.log("Computer Wins!");
    }else if((computerChoice = "paper")&&(humanChoice = "rock")){
        console.log("Computer Wins!");
    }else if((computerChoice = "scissors") &&(humanChoice = "paper")){
        console.log("Computer Wins!");
    }else if((humanChoice="paper") &&(computerChoice = "rock")){
        console.log("Human Wins!");
    }else if((humanChoice="rock")&&(computerChoice="scissors")){
        console.log("Human Wins!");
    }else if((humanChoice="scissors")&&(computerChoice="paper")){
        console.log("Human Wins!");
    }else {
        console.log("Draw!");
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


