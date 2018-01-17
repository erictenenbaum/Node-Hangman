var word = require("./word.js");

var inquirer = require("inquirer");


var wordBank = ["baseball", "football", "hockey", "basketball", "rugby"];


var randomNumber = Math.floor(Math.random() * wordBank.length);


function playGame(randomWord, wins, losses) {

    var wordConstructor = new word(randomWord);

    // console.log(wordConstructor);

    wordConstructor.createLetters();

    wordConstructor.displayWord();

    function askForLetter(remGuesses) {
        inquirer.prompt([ /* Pass your questions in here */ {
            type: "input",
            message: "Please guess a letter",
            name: "userGuess"
        }]).then(answers => {
            // Use user feedback for... whatever!!

            wordConstructor.checkUserGuess(answers.userGuess);
            console.log("Wins:" + wins);
            console.log("Losses: " + losses);
            console.log("Remaining Guesses: " + wordConstructor.remainingGuesses);


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