let rock = document.querySelector("#rock"); 
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let resultSection = document.querySelector(".results");
let computerScore = 0;
let humanScore = 0;
let winner = '';
let score = document.querySelector(".score");

function getComputerChoice(){
    value = Math.floor((Math.random()*3));
    
    const choices = ["rock", "paper", "scissors"];
    guess = choices[value];
    
    return choices[value];
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if ((computerChoice === "rock") && (humanChoice === "scissors")){
        winner = "Computer Wins!";
    }else if((computerChoice === "paper")&&(humanChoice === "rock")){
        winner = "Computer Wins!";
    }else if((computerChoice === "scissors") &&(humanChoice === "paper")){
        winner = "Computer Wins!";
    }else if((humanChoice==="paper") &&(computerChoice === "rock")){
        winner = "Human Wins!";
    }else if((humanChoice==="rock")&&(computerChoice==="scissors")){
        winner = "Human Wins!";
    }else if((humanChoice==="scissors")&&(computerChoice==="paper")){
        winner = "Human Wins!";
    }else {
        winner = "Draw!";
    }
    const result = document.createElement("h3");
    const computerResult = document.createElement("h4");
    const humanResult = document.createElement("h4");
    result.textContent = "Winner: " + winner;
    computerResult.textContent = "Computer Choice: " + computerChoice;
    humanResult.textContent = "Human Choice: " + humanChoice;
    resultSection.appendChild(computerResult);
    resultSection.appendChild(humanResult);
    resultSection.appendChild(result);
}

function playGame(humanChoice){
   
    
    
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
