console.log("Hello World");

computerScore = 0;
humanScore = 0;
function getComputerChoice(){
    value = Math.floor((Math.random()*3)+1);
    console.log(value);
}

function getHumanChoice(){
    guess = prompt("Enter your choice");
    console.log(guess);
}
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getHumanChoice();

