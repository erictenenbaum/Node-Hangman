# Node-Hangman

## Gameplay:

This is a command line version of hangman in which the user is prompted to guess a letter. 
As you would expect, if the letter is in the hidden word, it will be revealed. 
If it is not, then the user will lose a guess.
If the user is able to guess all the letters in the word, they will be notified they won the
game and will be asked if they would like to play again.
If the user runs out of guesses before revealing all the letters, they will be notified they
lost and then asked if they would like to play again.


## Code Design
This game was created through the use of constructors. There is a Word constructor and a Letter constructor.



### Letter Constructor

The letter constructor is the simpler of the two. It initializes by setting show to false, 
so that when it's main function displayLetter is called, it will return an underscore

When a user guesses a correct letter, letter.show will be set to true 
and the underscore will be replaced by the letter.


### Word Constructor

The word constructor is a little more involved, in that a majority of the gameplay is run through 
several of its functions. 

First, and most importantly, it has a create letters function that uses the letter constructor to 
create new letter objects for ever letter in the hidden word.

Next it has a displayWord function that ties into the displayLetter function from the letter constructor
this function uses a for loop to cycle through the letters and calls displayLetter in every instance.

CheckUserGuess is the real meat and potatoes of the app as this function sets an array to empty,
cycles through the hidden word and checks if the user guess is a match to any of the hidden word's letters.
If it is, that letter object will have shown set to true, and the displayLetter function will now show
the letter instead of an underscore. After all the letters are cycled through and either shown or remain
underscores, displayWord will be called. If no letters match the user guess, the user will lose a guess.

Lastly, the solved word function cycles through the hidden word array and all of the user guesses to check
if all the letters have been set to show. If they have, this will tell the user that they have won the game.
If not, it will prompt the user to guess another letter if they have not run out of guesses.




