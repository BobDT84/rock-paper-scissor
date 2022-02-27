function computerSelect(){
    let select = Math.floor(Math.random()*3)+1;
    return select;
}

function playerSelect(){
    console.log("Player make your selection:\n1. Rock\n2. Paper\n3. Scissor\n");
    let select = parseInt(prompt("What is your selection?"));
    if (select == 1 || select == 2 || select == 3) {
        return select;
    } else {
        console.log("That was not a valid selection. Please try again.");
        return playerSelect();
    }
}

function declareWinner(player, computer){
    console.log("Player selected " + selectToText(player) + 
    "\nComputer selected " + selectToText(computer));
    switch(true){
        case player == computer:
            console.log("It's a Draw!");
            break;
        case player == 1 && computer == 3:
            console.log("Player Wins!");
            break;
        case player == 2 && computer == 1:
            console.log("Player Wins!");
            break;
        case player == 3 && computer == 2:
            console.log("Player Wins!");
            break;
        case true:
            console.log("Computer Wins!");
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
    declareWinner(playerSelect(),computerSelect());
    console.log("Do you want to play again?");
    if(confirm("Play again?")){
        playRound();
    }
}

playRound();