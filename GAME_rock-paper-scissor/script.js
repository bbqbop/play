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

let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

function playRound(userChoice){
    let computerChoice = getComputerChoice()
    if (userChoice === computerChoice){ 
        result.textContent = `DRAW! ${capitalize(rPs[userChoice])} vs ${capitalize(rPs[computerChoice])}`;
        drawCounter += 1;
        
        
    } else if (
        userChoice == 0 && computerChoice == 2 || 
        userChoice == 1 && computerChoice == 0 ||
        userChoice == 2 && computerChoice == 1 ){
        result.textContent = `YOU WIN! ${capitalize(rPs[userChoice])} beats ${capitalize(rPs[computerChoice])}`;
        winCounter += 1;
   } else { 
        result.textContent = `YOU LOSE! ${capitalize(rPs[computerChoice])} beats ${capitalize(rPs[userChoice])}`;
        loseCounter += 1;
    }
    if (winCounter === 5 || loseCounter === 5){
        gameOver()
        
    }
    counter.textContent = `WINS: ${winCounter} | LOSES: ${loseCounter} | DRAWS: ${drawCounter}`;

}

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

const buttons = document.querySelectorAll('button');
  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => playRound(0))

  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => playRound(1))

  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => playRound(2))

const results = document.querySelector('.results')
const result = document.querySelector('#result');
const counter = document.querySelector('#counter');

function gameOver (){
    buttons.forEach(button => button.remove())
    result.classList.add('gameover');
    if (winCounter > loseCounter
        ? result.textContent = `YOU WON` 
        : result.textContent = `YOU LOSE`);
    const restartBtn = document.createElement('button', id='restart');
    restartBtn.textContent = 'PLAY AGAIN';
    results.appendChild(restartBtn);  
    restartBtn.addEventListener('click', function(){location.reload()})
    ;
}






