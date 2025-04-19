let rock = document.querySelector("#rock"); 
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let resultSection = document.querySelector(".results");
let computerScore = 0;
let humanScore = 0;
let winner = '';
let score = document.querySelector(".score");
const h_scores = document.querySelector("#human_score");
const c_scores = document.querySelector("#computer_score");
const winner_disp = document.querySelector(".winner");
let winnerTag = document.createElement("h1");

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
        computerScore++;
    }else if((computerChoice === "paper")&&(humanChoice === "rock")){
        winner = "Computer Wins!";
        computerScore++;
    }else if((computerChoice === "scissors") &&(humanChoice === "paper")){
        winner = "Computer Wins!";
        computerScore++;
    }else if((humanChoice==="paper") &&(computerChoice === "rock")){
        winner = "Human Wins!";
        humanScore++;
    }else if((humanChoice==="rock")&&(computerChoice==="scissors")){
        winner = "Human Wins!";
        humanScore++;
    }else if((humanChoice==="scissors")&&(computerChoice==="paper")){
        winner = "Human Wins!";
        humanScore++;
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
    showScore(humanScore, computerScore);
}

function showScore(h_score, c_score){
    
    h_scores.textContent = "Human Score: " + h_score;
    c_scores.textContent = "Computer Score: " + c_score;
    if(h_score === 5){
        
        winnerTag.textContent = "Human Wins!";
        winner_disp.appendChild(winnerTag);
    }
    else if(c_score === 5){
        winnerTag.textContent = "Computer Wins!";
        winner_disp.appendChild(winnerTag);
    }
}

function playGame(humanChoice){
   
    
    
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
