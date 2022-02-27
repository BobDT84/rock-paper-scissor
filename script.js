function computerSelect(){
    let select = Math.floor(Math.random()*3)+1;
    return select;
}

function playerSelect(){
    console.log("Player make your selection:");
    console.log("1. Rock");
    console.log("2. Paper");
    console.log("3. Scissor");
    let select = parseInt(prompt("What is your selection?"));
    if (select == 1 || select == 2 || select == 3) {
        return select;
    } else {
        console.log("That was not a valid selection. Please try again.");
        return playerSelect();
    }
}

console.log("computerSelect");
console.log(computerSelect());
console.log("playerSelect");
console.log(playerSelect());