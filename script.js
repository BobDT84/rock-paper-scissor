function selectForComputer(){
    let selection = Math.floor(Math.random()*3)+1;
    switch(selection){
        case 1:
            selection = "rock";
            break;
        case 2:
            selection = "paper";
            break;
        case 3:
            selection = "scissors";
            break;
    }
    return selection;
}

function logWinner(player, computer){
    let rock = 'rock',
        paper = 'paper',
        scissors = 'scissors'
    switch(true){
        case player == computer:
            console.log("It's a Draw!");
            break;
        case player == rock && computer == scissors:
            console.log("Player Wins!");
            score.player++;
            break;
        case player == paper && computer == rock:
            console.log("Player Wins!");
            score.player++;
            break;
        case player == scissors && computer == paper:
            console.log("Player Wins!");
            score.player++;
            break;
        case true:
            console.log("Computer Wins!");
            score.computer++;
            break;
    }
}

function playRound(event){
    let outcome = '';
    outcome = logWinner(this.id,selectForComputer());
    printScore(outcome);
    if(score.player >= 5){
        alert('Player Wins!');
    } else if(score.computer >= 5){
        alert('Computer Wins!');
    }
}

let score = {
    player: 0,
    computer: 0
};

function printScore(outcome){
    let scoreElement;
    for(let scoreKey of Object.keys(score)){
        scoreElement = document.getElementById(scoreKey);
        scoreElement.textContent = score[scoreKey];
    }
}

function playGame(){
    const selectButtons = document.getElementsByClassName('button');
    for(let button of selectButtons) {
        button.addEventListener('click',playRound);
    }
}

playGame();