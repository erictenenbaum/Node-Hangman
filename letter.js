// Used for each letter in the current word. Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore),
 // depending on whether or not the user has guessed the letter. 
 // This should contain letter specific logic and data.

 // SHow the letter
 // show the underscore
 // sh


 function Letter (letter) {

 	this.letter = letter;
 	this.shown = false;

 	// show underscore or letter to screen
 		// check to see if the letter should be shown or not
 			// if shown true this.letter
 			// else show underscore
 	this.showLetter = function () {
 		if(this.shown) {
 			return this.letter;
 		}
 		else {
 			return "_";
 		}
 	}

 		// method to change the state of the letter object
 		// setter 

 		this.updateLetterState = function(userGuess) {

 			if(this.letter === userGuess) {
 				this.shown = true;
 				return true;
 			}
 			else {
 				return false;
 			}

 		}

 	
 }

 module.exports = Letter;