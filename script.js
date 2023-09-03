'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No Number!');
    // document.querySelector('.message').textContent = ;

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    // document.querySelector('.message').textContent = 'Correct Number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? '📈 Number is too high'
      //       : ' 📉 Number is too low ';

      displayMessage(
        guess > secretNumber
          ? '📈 Number is too high'
          : ' 📉 Number is too low '
      );
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose the game';
    }
  }

  //     //When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' 📉 Number is too low ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lose the game';
  //     }

  //     //When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         ' 📈 Number is too high ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lose the game';
  //     }
  //   }

  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
  });
});
