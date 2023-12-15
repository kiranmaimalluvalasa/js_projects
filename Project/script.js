'use strict';
let secretNumber = 23;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess';
    document.querySelector('body').style.backgroundColor = 'Green';

    if (score > highscore) {
      highscore == score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent = 'Better lucky next time';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent = 'Better lucky next time';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let secretNumber = 23;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  /*if (highscore > score) {
    document.querySelector('.highscore').textContent = score;
  }*/
});
