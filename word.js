// Require letter constructor
var letter = require("./letter.js");



// Word constructor has an underscore array and letter array that will always be equal in length
// Once the other functions push to those arrays
// Remaining guesses set to 5

var Word = function(word) {
    this.word = word;
    this.underscoresArray = [];
    this.wordArray = this.word.split("");
    this.letterArray = [];
    this.remainingGuesses = 5;

    // this function takes in the word array that was split and creates a letter object
    // for each index of the word. Letter objects are pushed to letterArray
    this.createLetters = function() {;

        for (let i = 0; i < this.wordArray.length; i++) {
            this.letterArray.push(new letter(this.wordArray[i]));
        }
    };

    // This function displays the word by pushing either a "_" or letter for each index of the word
    // each index of the word is checked against the displayLetter function in the letter constructor
    // Letters that have been correctly guessed will be displayed. The rest will be "_"
    this.displayWord = function() {

        for (let i = 0; i < this.letterArray.length; i++) {
            this.underscoresArray.push(this.letterArray[i].displayLetter());
        }

        console.log(this.underscoresArray.join(" "));

    }

    // This function checks the user guess against the letters in the word array
    // If it is a match, it will set letter.shown to true which will display 
    // the letter in the console instead of displaying a "_"

    // Underscore array is emptied out and the letters will cycle through again
    // either as displayLetter true or false
    this.checkUserGuess = function(userGuess) {
        this.underscoresArray = [];        
        let indexCount = 0;
        for (let i = 0; i < this.wordArray.length; i++) {
            if (userGuess == this.wordArray[i]) {
                // Adds to the count if the user guess is a letter in the word
                ++indexCount;

                this.letterArray[i].shown = true;
            }
        }

        this.displayWord();

        // If there were no correct letters in the guess, the user will lose a guess

        if (indexCount === 0) {
            console.log("Sorry, that wasn't one of the letters");
            --this.remainingGuesses;
        }


    }


    // This function checks if all the letters in the letter array are set to shown
    // which would mean the entire word has been solved. 
    this.solvedWord = function() {
        let letterCount = 0
        for (let i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].shown) {
                letterCount++
            }
        }

        if (letterCount === this.letterArray.length) {
            return true;
        } else {
            return false;
        }
    }

}


module.exports = Word;