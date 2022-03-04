"use strict";
// <----Global Variables----> //

let gameActive = true;
let answer = null;
let guesses = 1;
let tries = 5;
let currentGuess = null;
let q1 = null;
let q2 = null;

// <---- Game Function Block ----> //

function main() {
  while (gameActive) {
    chooseDifficulty();
    createRandomNumber();
    currentGuess = prompt(`Take your first guess`);
    guessAndCheck();
    console.log(gameActive);
  }
}

// <---- Reset Game Function Block ----> //

function resetGame() {
  gameActive = true;
  answer = null;
  guesses = 1;
  tries = 5;
  currentGuess = null;
}

// <---- Play Again Function Block ----> //

function playAgain() {
  while (gameActive) {
    q2 = prompt("Wanna play again? Say Yes or No");
    if (q2.toLowerCase() === `yes`) {
      resetGame();
      guessNumber();
    } else {
      gameActive = false;
      console.log(gameActive);
    }
  }
}

// <---- Step #1 - Choose Your Difficulty ----> //

function chooseDifficulty() {
  q1 = prompt(
    `The game is guess the number. Please pick a difficulty (type the number). Very Easy(1-10) = 1, Easy(1-25) = 2, Medium(1-50) = 3, Hard(1-75) = 4, Very Hard(1-100) = 5.`
  );
}

// <---- Step #2 - Generate Random Answer Based On Difficulty ----> //

function createRandomNumber() {
  if (q1 == 1) {
    answer = Math.trunc(Math.random() * 10) + 1;
    console.log(answer, gameActive);
  } else if (q1 == 2) {
    answer = Math.trunc(Math.random() * 25) + 1;
    console.log(answer, gameActive);
  } else if (q1 == 3) {
    answer = Math.trunc(Math.random() * 50) + 1;
    console.log(answer, gameActive);
  } else if (q1 == 4) {
    answer = Math.trunc(Math.random() * 75) + 1;
    console.log(answer, gameActive);
  } else if (q1 == 5) {
    answer = Math.trunc(Math.random() * 100) + 1;
    console.log(answer, gameActive);
  } else {
    console.log();
    chooseDifficulty();
  }
}

// <---- Step #3 - Check "currentGuess" Against "answer" ----> //

function guessAndCheck() {
  while ((tries > 1, gameActive)) {
    if (currentGuess == answer) {
      alert(
        `Congrats you guessed the correct number after ${guesses} guesses.`
      );
      playAgain();
    } else if (currentGuess > answer) {
      tries--;
      currentGuess = prompt(
        `I'm sorry but your guess is wrong you need to pick a number lower than ${currentGuess}. You have ${tries} tries left. Good Luck.`
      );
      guesses++;
      guessAndCheck(currentGuess);
    } else if (currentGuess < answer) {
      tries--;
      prompt(
        `I'm sorry but your guess is wrong you need to pick a number higher than ${currentGuess}. You have ${tries} tries left. Good Luck.`
      );
      guesses++;
      guessAndCheck(currentGuess);
    }
  }

  alert(`Sorry you ran out of guesses.`);
  playAgain();
}

main();
