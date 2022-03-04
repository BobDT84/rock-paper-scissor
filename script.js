


function playRound(event){
    console.log(event);
    console.log(this.id);
    return declareWinner(this.id,selectForComputer());
    }

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

function playGame(){
    const selectButtons = document.getElementsByClassName('button');
    for(let button of selectButtons) {
        button.addEventListener('click',playRound);
    }
    let wins = 0,
        loses = 0,
        draws = 0;
    switch(playRound()){
        case "draw":
            draws++;
            break;
        case "player":
            wins++;
            break;
        case "computer":
            loses++;
            break;
        console.log(
            "Round " + (i+1).toString() +
            "\nPlayer's Score: " + wins.toString() +
            "\nComputer's Score: " + loses.toString() +
            "\nDraws: " + draws.toString());
    }
}

playGame();