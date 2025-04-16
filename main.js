

let computerScore = 0;
let humanScore = 0;
function getComputerChoice(){
    value = Math.floor((Math.random()*3));
    
    const choices = ["rock", "paper", "scissors"];
    guess = choices[value];
    console.log("Computer choice: " + guess);
    return choices[value];
    
}

function getHumanChoice(){
    let guess = prompt("Enter your choice: ");
    console.log("Human choice: " + guess);
    return guess;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if ((computerChoice === "rock") && (humanChoice === "scissors")){
        console.log("Computer Wins!");
    }else if((computerChoice === "paper")&&(humanChoice === "rock")){
        console.log("Computer Wins!");
    }else if((computerChoice === "scissors") &&(humanChoice === "paper")){
        console.log("Computer Wins!");
    }else if((humanChoice==="paper") &&(computerChoice === "rock")){
        console.log("Human Wins!");
    }else if((humanChoice==="rock")&&(computerChoice==="scissors")){
        console.log("Human Wins!");
    }else if((humanChoice==="scissors")&&(computerChoice==="paper")){
        console.log("Human Wins!");
    }else {
        console.log("Draw!");
    }
}

function playGame(){
   
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}
playGame();


