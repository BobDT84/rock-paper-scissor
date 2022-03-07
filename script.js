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
    printScore(outcome);
}

let score = {
    win: 0,
    lose: 0,
    draw: 0
};

function printScore(outcome){
    switch(outcome){
        case "draw":
            score.draw++;
            break;
        case "player":
            score.win++;
            break;
        case "computer":
            score.lose++;
            break;
    }
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