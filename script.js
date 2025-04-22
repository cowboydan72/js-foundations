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
            console.log(computerChoice)
            }

        //Run computer choice function
        getComputerChoice()

    //Get player's choice with prompt
        //Declare function
        function getHumanChoice() {

            //Prompt user for choice
            humanChoice = prompt("Rock, Paper, or Scissors?")
            console.log(humanChoice)
    

        }

        //Run human choice function
        getHumanChoice()

    //Single round logic
        //Declare function
        function playRound(humanChoice, computerChoice) {
            
        }
    
    //Declare selection constants
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    //Run a single round
    playRound(humanSelection, computerSelection);
        

