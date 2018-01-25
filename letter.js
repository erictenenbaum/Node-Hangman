
// Letter constructor. letter.shown is set to false by default
var Letter = function(letter) {
    this.letter = letter;
    this.shown = false;

    // While letter.show is false  this retruns a "_"
    // When letter.show is true it returns the letter
    this.displayLetter = function() {
        if (this.shown) {
            return this.letter;
        } else {
            return "_";
        }
    }
}

// exports letter constructor to be used in the Word constructor
module.exports = Letter;




