// requiring my dependencies
var word = require("./word.js");
var inquirer = require("inquirer");
var wordBank = ["baseball", "football", "hockey", "basketball", "rugby"];


// generates random number to use to select random word from word bank
var randomNumber = Math.floor(Math.random() * wordBank.length);


// play game function takes in a random word, wins and losses as parameters
function playGame(randomWord, wins, losses) {

    // variable used to create new random word constructor
    var wordConstructor = new word(randomWord);


    // calls create letters function from word and letter constructos
    wordConstructor.createLetters();

    // calls displayWord function from word constructor
    wordConstructor.displayWord();

    // uses inquirer to ask user for a letter guess
    function askForLetter(remGuesses) {
        inquirer.prompt([ /* Pass your questions in here */ {
            type: "input",
            message: "Please guess a letter",
            name: "userGuess"
        }]).then(answers => {
            // Use user feedback for... whatever!!

            // checks the user supplied guess against the word constructor checkuserguess function
            wordConstructor.checkUserGuess(answers.userGuess);
            console.log("Wins:" + wins);
            console.log("Losses: " + losses);
            console.log("Remaining Guesses: " + wordConstructor.remainingGuesses);

            // checks if there are still remaining guesses and then if the word has been solved
            // if no to both, it will recursively call askForLetter within askForLetter function
            if (wordConstructor.remainingGuesses > 0) {
                if (wordConstructor.solvedWord()) {
                    console.log("You Won!");
                    playAgain(++wins, losses);

                } else {
                    askForLetter();

                }

            } else {
                console.log("You lose!");
                playAgain(wins, ++losses);
            }







        });
    }

    askForLetter();

}

// Play again function asks the user if they want to play again and passes in
// wins and losses as parameters
function playAgain(wins, losses) {

    randomNumber = Math.floor(Math.random() * wordBank.length);
    inquirer.prompt([ /* Pass your questions in here */ {
        type: "confirm",
        message: "Would you like to play again?",
        name: "playAgain"
    }]).then(answers => {
        // Use user feedback for... whatever!!
        if (answers.playAgain) {

            playGame(wordBank[randomNumber], wins, losses);



        } else {
            console.log("Thanks for playing! Come back again soon!")
        }
    });
}


playGame(wordBank[randomNumber], 0, 0)