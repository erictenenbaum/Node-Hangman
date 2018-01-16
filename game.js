// Starting and stopping game

var Word = require("./word.js");

var inquirer = require("inquirer");

var wordArray = ["hello", "wow", "stop", "pickup", "wow"];

var rando = wordArray[Math.floor(Math.random() * wordArray.length)];

console.log(rando);

function startGame() {

	var WordConstruct = new Word(rando);

	console.log(WordConstruct);

	WordConstruct.generateLetterArr();

	// console.log(WordConstruct);

	askForUserLetter();

	function askForUserLetter () {
		inquirer.prompt([/* Pass your questions in here */
			{
				type: "input",
				message: "Please guess a letter",
				name: "userGuess"
			}]).then(answers => {
    // Use user feedback for... whatever!!

    var userGuess = answers.userGuess;

    // method to check for user guess in word

    

    if(WordConstruct.counter != 0 && WordConstruct.underscores.join("") !=
    	WordConstruct.word) {
    	WordConstruct.checkForLetter(userGuess);

    	askForUserLetter();
    }

    else if (WordConstruct.underscores.join("") !=
    	WordConstruct.word){
    	console.log("Congrats you won!");
    }
    else {
    	console.log("you lost");
    }

 
    
    	
    
});



	

}


	}

startGame();

