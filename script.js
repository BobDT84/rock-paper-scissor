function selectForComputer(){
    let selection = Math.floor(Math.random()*3)+1;
    return selection;
}

function askPlayerToSelect(){
    console.log("Player make your selection:\n" +
        "1. Rock\n" +
        "2. Paper\n" +
        "3. Scissor\n"
        );
    let selection = parseInt(prompt("What is your selection?"));
    if (selection == 1 || selection == 2 || selection == 3) {
        return selection;
    } else {
        console.log("That was not a valid selection. Please try again.");
        return askPlayerToSelect();
    }
}

function declareWinner(player, computer){
    console.log(
        "Player selection " + selectToText(player) + 
        "\nComputer selection " + selectToText(computer)
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

function selectToText(selection){
    switch(selection){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}

function playRound(){
    return declareWinner(askPlayerToSelect(),selectForComputer());
    }


function playGame(){
    let wins = 0,
        loses = 0,
        draws = 0;
    for( let i=0; i<5; i++){
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
        }
        console.log(
            "Round " + (i+1).toString() +
            "\nPlayer's Score: " + wins.toString() +
            "\nComputer's Score: " + loses.toString() +
            "\nDraws: " + draws.toString());
    }
}

playGame();