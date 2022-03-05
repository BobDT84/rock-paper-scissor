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

function declareWinner(player, computer){
    console.log(
        "Player selection " + player + 
        "\nComputer selection " + computer
        );
        let rock = 'rock',
            paper = 'paper',
            scissors = 'scissors'
        switch(true){
            case player == computer:
                console.log("It's a Draw!");
                return "draw";
        case player == rock && computer == scissors:
            console.log("Player Wins!");
            return "player";
            case player == paper && computer == rock:
            console.log("Player Wins!");
            return "player";
        case player == scissors && computer == paper:
            console.log("Player Wins!");
            return "player";
        case true:
            console.log("Computer Wins!");
            return "computer";
    }
}

function playRound(event){
    console.log("playRound");
    let outcome = '';
    outcome = declareWinner(this.id,selectForComputer());
    logScore(outcome);
    score.round++;
}

let score = {
    round: 0,
    wins: 0,
    loses: 0,
    draws: 0
};

function logScore(outcome){
    switch(outcome){
        case "draw":
            score.draws++;
            break;
        case "player":
            score.wins++;
            break;
        case "computer":
            score.loses++;
            break;
    }
}

function playGame(){
    const selectButtons = document.getElementsByClassName('button');
    for(let button of selectButtons) {
        button.addEventListener('click',playRound);
    }
}

playGame();