////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    
    switch (playerMove) {
        case "rock":
            if (computerMove === "scissors") {
                winner = "player";
            } else if (computerMove === "paper") {
                winner = "computer";
            } else {
                winner = "tie";
            }
            break;
        case "paper":
            if (computerMove === "scissors") {
                winner = "computer";
            } else if (computerMove === "rock") {
                winner = "player";
            } else {
                winner = "tie";
            }
            break;

        default:
            if (computerMove === "paper") {
                winner = "player";
            } else if (computerMove === "rock") {
                winner = "computer";
            } else {
                winner = "tie";
            }
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;
    var result;

    while (playerWins < 5 && computerWins < 5) {
        result = getWinner(getPlayerMove(),getComputerMove());

        if (result === "player") {
            playerWins++;
        } else if (result === "computer") {
            computerWins++;
        }

        console.log("The score is currently Player: " + playerWins + ", Computer: " + computerWins + "\n");
    }

    return [playerWins, computerWins];
}