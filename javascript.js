function userChoose(){
    var userChoice = prompt("Rock? Paper? Scissors?");
    userChoice = userChoice.toLowerCase();
    return userChoice; 
}

function computerChoose(){
    var array = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random()*4);
    return array[computerChoice];
}

function playRound(userChoice, computerChoice){
    if(userChoice === computerChoice){
        result = "Draw";
    }else if((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result = "User Wins";
    }else{
        result = "Computer Wins";
    }
    return result;
}

var user = userChoose();
var computer = computerChoose();
var result = playRound(user, computer);

console.log("User played " + user + ". Computer played " + computer + ".\n" + result + "\n");

