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

            //Prints human choice
            return humanChoice
        }
        

    //Single round logic
        //Declare function
        function playRound(humanChoice, computerChoice) {

            //Declare computer win
            if ((computerChoice === "Rock" && humanChoice === "Scissors")
            || (computerChoice === "Paper" && humanChoice === "Rock")
            || (computerChoice === "Scissors" && humanChoice === "Paper")) {
               winner = ("You lose! " + computerChoice + " beats " + humanChoice)
            
            }                

            //Declare human win
            else if ((humanChoice === "Rock" && computerChoice === "Scissors")
                 || (humanChoice === "Paper" && computerChoice === "Rock")
                 || (humanChoice === "Scissors" && computerChoice === "Paper")) {
                    winner = ("You win! " + humanChoice + " beats " + computerChoice)
                }
            //Declare tie
            else {
                winner = ("It's a tie!")
            }

            //Prints winner text
            return winner
            
        }
    
    //Declare selection constants
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    //Run a single round
    playRound(humanSelection, computerSelection);
    console.log(winner)
        

