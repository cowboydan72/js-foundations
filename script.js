//Rock paper scissors game in console
    //Get a random choice from computer
        //Declare function
        function getComputerChoice() {

            //Generate number 1-3
            const minCeiled = Math.ceil(1);
            const maxFloored = Math.floor(3);
            let number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

            //Declare "Rock" if number is 1
            let computerChoice;
            if (number === 1) {
                computerChoice = "Rock"
            }

            //Declare "Paper" if number is 2
            else if (number === 2) {
                computerChoice = "Paper"
            }

            //Declare "Scissors" if number is 3
            else {
                computerChoice = "Scissors"
            }
            
            //Prints computer choice
            return computerChoice
            }

    //Get player's choice with prompt
        //Declare function
        function getHumanChoice() {

            //Prompt user for choice
            humanChoice = prompt("Rock, Paper, or Scissors?")

            //Prints human choice with proper punctuation
            return String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1).toLowerCase();
            
        }

        let computerCounter = 0
        let playerCounter = 0

    //Single round logic
        //Declare function
        function playRound(humanChoice, computerChoice) {

            //Declare computer win
            if ((computerChoice === "Rock" && humanChoice === "Scissors")
            || (computerChoice === "Paper" && humanChoice === "Rock")
            || (computerChoice === "Scissors" && humanChoice === "Paper")) {
               winner = ("You lose! " + computerChoice + " beats " + humanChoice);
               ++computerCounter;            
            }                

            //Declare human win
            else if ((humanChoice === "Rock" && computerChoice === "Scissors")
                 || (humanChoice === "Paper" && computerChoice === "Rock")
                 || (humanChoice === "Scissors" && computerChoice === "Paper")) {
                    winner = ("You win! " + humanChoice + " beats " + computerChoice);
                    ++playerCounter;
                }
            //Declare tie
            else {
                winner = ("It's a tie!")
            }

            //Prints win phrase
            console.log(winner)
            

            //Returns winner text
            return winner

             
        }


    //Run a round
        //Declare function
        function playGame() {

            //Declare selection constants
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            
            
            
            //Runs a single round
            playRound(humanSelection, computerSelection);
            
             
        }
    //Prints scores
    function score() {

        //Declare score tracker variables
        let computerScore = `Computer's score is ${computerCounter}`
        let playerScore = `Player's score is ${playerCounter}`
        
        //Prints scores to console
        console.log(playerScore)
        console.log(computerScore) 
    }

    //Runs 5 rounds
    playGame()  
    score()
    playGame() 
    score() 
    playGame()  
    score()
    playGame()  
    score()
    playGame()     
    score() 
        
        

