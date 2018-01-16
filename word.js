// Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.

// display a list of undersocres - need a method for this
// update undersocres to show correct letters 
// check to see if user guees is in the word


// google var that = this

var Letter = require("./letter.js");

function Word(word) {

	this.word = word;
	// array to store underscores
	this.underscores = [];
	// array of Letters
	this.letterConstructorArr = [];

	this.counter = 9;

	this.generateLetterArr = function() {
		for(var i = 0; i < this.word.length; i++) {
			this.letterConstructorArr.push(new Letter(this.word[i]))
		}

		console.log(this.letterConstructorArr);
		this.generateUnderscores();
	}

	// generate underscores

		// loop over the letterConstructorArr
			// call showLetter on each Letter object
			// store return value onto underscore Array
			// show underscore array to console

	this.generateUnderscores = function () {
		for (var i = 0; i < this.letterConstructorArr.length; i++) {
			this.underscores.push(this.letterConstructorArr[i].showLetter());
		}
		console.log(this.underscores.join(" "));
	}

	this.checkForLetter = function (userGuess) {

		console.log(userGuess);

		for (var i = 0; i < this.letterConstructorArr.length; i++) {
			if(this.letterConstructorArr[i].updateLetterState(userGuess)) {
				// console.log("Letter was found!!");
				// return true;

				this.underscores[i] = this.letterConstructorArr[i].showLetter();
			}


		}
		console.log(this.letterConstructorArr);
		console.log(this.underscores.join(" "));
		this.deincrementCounter(userGuess);

	}

	this.deincrementCounter = function(userGuess) {
		// underscore should now have the letter or not;
		// loop through underscore again cehcking to see if the userGuess
		// exists in underscores

		// if it doesn't we will then deincrement counter;
		if(this.underscores.indexOf(userGuess) === -1) { 
			--this.counter;
			
			console.log("you have this " + this.counter + " guesses left");	

		}
		else {
			console.log("you have this " + this.counter + " guesses left");	
		}




	}




}




module.exports = Word;


