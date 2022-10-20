
//The User Prompt
let username = prompt('Enter your username');

function numberGuessingGame(range) {
    let score = 0;
    let guess = prompt(`Guess a number between 1 and ${range}`);
    let randomNumber = Math.floor(Math.random() * range) + 1;

    //If the Guess is correct 
    if (guess == randomNumber) {
        score++;
        alert(`You guessed right ${username}! Your score is ${score} point`);
        range++;
        numberGuessingGame(range++);

        //For incorrect guess, End Game. 
    } else {
        alert(`You guessed wrong! The correct number is ${randomNumber}. Game Ended!  Please Try again. `);
    }
}

numberGuessingGame(2)