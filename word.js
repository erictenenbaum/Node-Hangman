var letter = require("./letter.js");


var Word = function(word) {
    this.word = word;
    this.underscoresArray = [];
    this.wordArray = this.word.split("");
    this.letterArray = [];
    this.remainingGuesses = 5;


    this.createLetters = function() {
        // console.log("wordArray: " + this.wordArray);

        for (let i = 0; i < this.wordArray.length; i++) {
            this.letterArray.push(new letter(this.wordArray[i]));
        }

        // console.log("letterArray: " + this.letterArray);
    }

    this.displayWord = function() {

        for (let i = 0; i < this.letterArray.length; i++) {
            this.underscoresArray.push(this.letterArray[i].displayLetter());
        }

        console.log(this.underscoresArray.join(" "));

    }

    this.checkUserGuess = function(userGuess) {
        this.underscoresArray = [];
        this.incorrectGuess = false;
        let indexCount = 0;
        for (let i = 0; i < this.wordArray.length; i++) {
            if (userGuess == this.wordArray[i]) {
                // console.log("You found me");
                ++indexCount;

                this.letterArray[i].shown = true;
            }
        }

        this.displayWord();

        // console.log("indexCount: " + indexCount);

        if (indexCount === 0) {
            console.log("Sorry, that wasn't one of the letters");
            --this.remainingGuesses;
        }


    }



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