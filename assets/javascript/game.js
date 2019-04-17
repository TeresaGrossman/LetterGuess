// Create computerChoice array with all of the letter options in capitals

// Create computerGuess var.  Make sure it is outside, so as not to reset each time the user selects

// Create guessesSoFar array for user guesses to be pushed to

// Create wins/losses/guessesLeft var

//onKeyUp function

// 
var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];//
var guessesSoFar = [];//Array to push user choices to
var wins = 0;
var losses = 0;
guessesLeft = 9;
