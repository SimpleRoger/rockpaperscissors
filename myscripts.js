let options = ['rock', 'paper', 'scissors']
function computerPlay(random) {
    let choice = Math.floor((Math.random() * 3));
    return options[choice];
}

console.log (computerPlay())

function playRound (playerSelection, computerSelection) {
    
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Tied! You both choose Rock";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose!";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win!";
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "Tied";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "you lose!";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win!";
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "Tied";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "you lose!";
    } else {
        return "error";
    }

}
let winCountPlayer = 0;
let winCountComputer = 0;

function game () {
    while (winCountPlayer < 5 && winCountComputer < 5) {
        let input = window.prompt ('Please enter your choice')
        let outcome = playRound (input, computerPlay());
        if (outcome == 'You Win') {
            winCountPlayer++;
            console.log(outcome);
            console.log(winCountPlayer);
            console.log(winCountComputer);
        }
        else if (outcome == 'Tied') {
            console.log(outcome);
            console.log(winCountPlayer);
            console.log(winCountComputer);
        }
        else {
            winCountComputer++;
            console.log(outcome);
            console.log(winCountPlayer);
            console.log(winCountComputer);
        }
    } 
}

game();
if (winCountComputer == 5) {
    console.log ("Computer wins!");
}
else {
    console.log ("Human Win!")
}