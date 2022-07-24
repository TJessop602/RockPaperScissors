function computerChoose(){
    var array = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random()*3);
    return array[computerChoice];
}

function playRound(userChoice, computerChoice){
    if(userChoice === computerChoice){
        result = "Draw";
    }else if((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")){
        result = "User Wins";
        userScore = userScore+1;
    }else{
        result = "Computer Wins";
        computerScore = computerScore+1;
    }
    return result;
}

let userScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const user = button.id;
        button.classList.add('clicked', 'disabled'); 
        document.getElementById('0').textContent = user;
        var computer = computerChoose();
        document.getElementById('1').textContent = computer;
        var result = playRound(user, computer, userScore, computerScore);
        document.getElementById('t').textContent = result;
        document.getElementById('s1').textContent = userScore;
        document.getElementById('s2').textContent = computerScore;
        console.log(userScore, computerScore);

    });
    
    button.addEventListener('transitionend', () => {
        button.classList.remove('clicked');
        setTimeout(function(){
            button.classList.remove('disabled');
        }, 2000);

        console.log("remove");
    });
});
