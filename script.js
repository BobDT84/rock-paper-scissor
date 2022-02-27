function computerSelect(){
    let select = Math.floor(Math.random()*3)+1;
    return select;
}

function playerSelect(){
    console.log("Player make your selection:\n" +
        "1. Rock\n" +
        "2. Paper\n" +
        "3. Scissor\n"
        );
    let select = parseInt(prompt("What is your selection?"));
    if (select == 1 || select == 2 || select == 3) {
        return select;
    } else {
        console.log("That was not a valid selection. Please try again.");
        return playerSelect();
    }
}

function declareWinner(player, computer){
    console.log(
        "Player selected " + selectToText(player) + 
        "\nComputer selected " + selectToText(computer)
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

function selectToText(select){
    switch(select){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}

function playRound(){
    return declareWinner(playerSelect(),computerSelect());
    }


function game(){
    let win = 0,
        lose = 0,
        draw = 0;
    for( let i=0; i<5; i++){
        switch(playRound()){
            case "draw":
                draw++;
                break;
            case "player":
                win++;
                break;
            case "computer":
                lose++;
                break;
        }
        console.log(
            "Round " + (i+1).toString() +
            "\nPlayer's Score: " + win.toString() +
            "\nComputer's Score: " + lose.toString() +
            "\nDraws: " + draw.toString());
    }
}

game();