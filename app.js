const coMoves = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return coMoves[(Math.random() * coMoves.length) | 0]      
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = "";
    
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWinText.textContent = (play(playerSelection,computerSelection));
            playerScoreText.textContent = "You Scored: "+ playerScore;
            computerScoreText.textContent = "Computer Scored: "+ computerScore
            
        })
    })
    function play(playerSelection, computerSelection) {
        computerSelection = computerPlay().toLowerCase()

        let tie = "It's a Tie! You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

        let paperBeatRock = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

        let scissorsBeatPaperLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

        let paperBeatRockLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

        let rockBeatScissors = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

        let rockBeatScissorsLoss = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

        let scissorsBeatPaper = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
    
            
            if(computerSelection === playerSelection){
                return tie;

            }else if ((playerSelection === "paper") && (computerSelection === "rock")) {
                playerScore++;
                return paperBeatRock;   
            }else if ((playerSelection === "paper" && (computerSelection === "scissors"))) {
                computerScore++;
                return scissorsBeatPaperLoss;
            }else if ((playerSelection === "rock") && (computerSelection === "paper")){
                computerScore++;
                return paperBeatRockLoss
            }else if ((playerSelection === "rock") && (computerSelection === "scissors")){
                playerScore++;
                return rockBeatScissors
            }else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
                computerScore++;
                return rockBeatScissorsLoss;
            }else {
                playerScore++;
                return scissorsBeatPaper;
         } 

    }
    
    
}

const body = document.querySelector('body');
const resultsDiv = document.createElement('div')
resultsDiv.style.margin = "15px";
resultsDiv.setAttribute("align", "center")
body.appendChild(resultsDiv);



const battleWinText = document.createElement('p');
battleWinText.style.color = "white";
battleWinText.style.fontSize = "25px";
resultsDiv.appendChild(battleWinText);

const playerScoreText = document.createElement('p')
playerScoreText.style.color = "white";
playerScoreText.style.fontSize = "20px";
resultsDiv.appendChild(playerScoreText);

const computerScoreText = document.createElement('p');
computerScoreText.style.color = "white";
computerScoreText.style.fontSize = "20px";
resultsDiv.appendChild(computerScoreText);

const gameWinnerText = document.createElement('p')
gameWinnerText.style.color = "purple"
gameWinnerText.style.fontSize = "30px"
resultsDiv.insertBefore(battleWinText, resultsDiv.children[0])







game();

        