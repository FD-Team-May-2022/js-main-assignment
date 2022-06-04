function computerPlay() {
    let random = Math.floor(Math.random()*3)
    let play = "Scissors"
    if (random == 0) {
        play = "Rock"
    } else if (random == 1) {
        play = "Paper"
    }
    return play
}


// console.log("The computer plays " + computerPlay() + ".")

function playRound(playerSelection, computerSelection) {
    let scoPlayer = 0;
    let scoComputer = 0;
    let round=true;
    if (playerSelection.toLowerCase() == 'rock') {
        const expr = computerSelection;
        switch (expr) {
            case 'Rock':
                console.log('Draw!');
                break;
            case 'Paper':
                scoComputer += 1
                console.log('You lose! Paper beats Rock');
                break;
            case 'Scissors':
                scoPlayer += 1;
                console.log('You win! Rock beats Scissors');
                break;
            default:
            console.log(`Sorry, there is something wrong.`);
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        const expr = computerSelection;
        switch (expr) {
            case 'Rock':
                scoPlayer += 1;
                console.log('You win! Paper beats Rock');
                break;
            case 'Paper':
                console.log('Draw!');
                break;
            case 'Scissors':
                scoComputer += 1
                console.log('You lose! Scissors beats Paper');
                break;
            default:
            console.log(`Sorry, there is something wrong.`);
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        const expr = computerSelection;
        switch (expr) {
            case 'Rock':
                scoComputer += 1
                console.log('You lose! Rock beats Scissors');
                break;
            case 'Paper':
                console.log('You win! Scissors beats Paper');
                break;
            case 'Scissors':
                scoPlayer += 1;
                console.log('Draw!');
                break;
            default:
                round=false;
                console.log(`Sorry, there is something wrong.`);
        }
    } else {
        round=false;
        console.log(`Sorry, there is something wrong.`);
    }
    return [scoPlayer, scoComputer, round]
}

// const playerSelection = 'Rock'
// console.log("The player plays " + playerSelection)

// console.log(playRound(playerSelection, computerPlay())[0])

let scorePlayer = 0;
let scoreComputer = 0;
alert("Let's play!")
for (let i = 0; i<5; i++) {
    let playerSelection = prompt("Rock, paper or scissors ?")
    console.log("\nRound " + i)
    let computerSelection = computerPlay()
    let res = playRound(playerSelection, computerSelection)
    let round = res[2]
    if (round) {
        scorePlayer += res[0]
        scoreComputer += res[1]
    } else {
        i--
        console.log("Please start this round again.")
    }

    console.log("Player has " + scorePlayer + " points ; Computer has " + scoreComputer + " points.\n")
}
console.log((scorePlayer > scoreComputer)? "\nYou win!" : (scoreComputer > scorePlayer)? "\nYou lose!" : "\nDraw!" )