 
        let playerSelection;
        let playerScore = 0
        let computerScore = 0
        let computerSelection;

        const moves = ["Rock", "Paper", "Scissors"]

        function computerPlay() {
            return moves[(Math.random() * moves.length) | 0]
            
            
        }

        function play(playerSelection = prompt("Rock, Paper, or Scissors?"), computerSelection) {
            computerSelection = computerPlay().toLowerCase()
            playerSelection = playerSelection.toLowerCase()
            
            if(computerSelection === playerSelection){
            console.log("Tie!!");

            }else if(
                (computerSelection == 'rock' && playerSelection == 'scissors') ||
                (computerSelection == 'scissors' && playerSelection == 'paper') ||
                (computerSelection == 'paper' && playerSelection == 'rock')
                ){
                computerScore = ++computerScore;
                console.log('Computer scored!!!')

                }else{
                    playerScore = ++playerScore;
                    console.log('You scored!!')
                }       
        } 
        play(playerSelection, computerSelection)