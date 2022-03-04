const selectButtons = document.getElementsByClassName('button');
for(let button of selectButtons) {
    button.addEventListener('click',playRound);
}


function playRound(event){
    console.log(event);
    console.log(this.id);
    return declareWinner(this.id,selectForComputer());
    }

function selectForComputer(){
    let selection = Math.floor(Math.random()*3)+1;
    return selectToText(selection);
}

function selectToText(selection){
    switch(selection){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

function declareWinner(player, computer){
    console.log(
        "Player selection " + player + 
        "\nComputer selection " + computer
        );
        switch(true){
            case player == computer:
                console.log("It's a Draw!");
                return "draw";
        case player == 1 && computer == 3:
            console.log("Player Wins!");
            return "player";
        case player == 2 && computer == 1:
            console.log("Player Wins!");
            return "player";
        case player == 3 && computer == 2:
            console.log("Player Wins!");
            return "player";
        case true:
            console.log("Computer Wins!");
            return "computer";
    }
}



function playGame(){
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