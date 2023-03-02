// create indexed array
// generate computer answer (0-2);
// prompt user for answer;
// compare ;
// // rock0 > scissor;
// // paper1 > rock;
// // scissor2 > paper;
// declare winner;

const rPs = ['rock','paper','scissor']

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getUserChoice() {
    let userInput = prompt('Rock, Paper, Scissor?');
    let userChoice = rPs.indexOf((userInput).toLowerCase());
    if (userChoice == -1){
        alert('INCORRECT INPUT');
        return getUserChoice()}
    return userChoice;
    }

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}

function playRound(userChoice, computerChoice){
    if (userChoice === computerChoice){ 
        return `DRAW! ${capitalize(rPs[userChoice])} vs ${capitalize(rPs[computerChoice])}`;
        
    } else if (
        userChoice == 0 && computerChoice == 2 || 
        userChoice == 1 && computerChoice == 0 ||
        userChoice == 2 && computerChoice == 1 ){
        return `YOU WIN! ${capitalize(rPs[userChoice])} beats ${capitalize(rPs[computerChoice])}`;
   } else { 
        return `YOU LOSE! ${capitalize(rPs[computerChoice])} beats ${capitalize(rPs[userChoice])}`
    }}

function game() {
    let draw = 0
    let win = 0
    let lose = 0
    for (i=0; i < 5; i++){
        let userChoice = getUserChoice()
        let computerChoice = getComputerChoice()
        let round = playRound(userChoice, computerChoice);
        console.log(round);
        if (round.startsWith('INCORRECT')){
            i -= 1;
            continue;
        }
        else if (round.startsWith('DRAW')) draw += 1;
        else if (round.startsWith('YOU WIN')) win += 1;
        else if (round.startsWith('YOU LOSE')) lose += 1;
    }
    let result = win > lose ? 'YOU WON!' : 'YOU LOST!';
    console.log(`${result} ${win} wins, ${lose} defeats, ${draw} draws`)
}
