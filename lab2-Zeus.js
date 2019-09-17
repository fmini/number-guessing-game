//create variables
const randomNum = Math.floor( Math.random() * 10 + 1 );
let guess = 0;
let guessNum = 1;
const guesses = [];
const userName = 'NoName';

console.log( randomNum );

// ask user for their name and first guess
//userName = prompt( 'What is your name?' );
alert( `OK, ${ userName }, let's play a game. You will have 5 guesses. Ready?` );
guess = prompt( 'What is your first guess between 1 and 10?' );
do {
	console.log( guesses );
	// Check if guess is between 1 and 10
	if ( isNaN( guess ) || parseInt.guess < 1 || parseInt.guess > 10 ) {
		console.log(
			`guess ${ guessNum } is ${
				parseInt.guess
			} and is ${ typeof guess } or not 1-10`
		);
		guess = prompt( `Rules a little tough for you, ${ userName }?
      Let's try that again. You have ${ 5 - guessNum } tries remaining
			Try a number between 1 and 10.` );
	}

	// Check if number was already guessed
	else if ( guesses.includes( parseInt.guess ) ) {
		console.log(
			`guess ${ guessNum } is ${ guess } and already guessed that number ran`
		);
		guess = prompt( `You already said ${ guess }, ${ userName }, try again. You have ${ 5 -
      guessNum } tries remaining.
			Enter a different number.` );
	}

	// Check if guess is correct
	else if ( parseInt.guess !== randomNum ) {
		console.log(
			`guess ${ guessNum } was ${ guess } and was checked  against ${ randomNum } and is wrong.`
		);

		guess = prompt(
			`Nope, not what I was thinking, try again. You have ${ 5 -
        guessNum } tries remaining. Enter a different number.`
		);
	}

	// Alert that they guessed correctly
	else if ( parseInt.guess == randomNum ) {
		console.log( `guess ${ guessNum } was ${ guess } and equalled randomNum` );
		alert( 'You Won!' );
		break;
	}

	// Let them know they lost
	else {
		alert( 'Not so good at this are you?' );
	}
	guesses.push( guess );
	console.log[ guesses ];
	guessNum++;
} while ( guessNum < 5 );

console.log( `final guess was ${ guess }` );