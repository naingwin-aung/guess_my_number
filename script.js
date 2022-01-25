'use strict';
let guess = document.querySelector('.guess');
let btnCheck = document.querySelector('.btn.check');
let againBtn = document.querySelector('.btn.again');
let message = document.querySelector('.message');
let score = document.querySelector('.score');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let labelScore = 20;
let highscore = 0;

console.log(randomNumber);

btnCheck.addEventListener('click', function() {
    let guessNumber = Number (guess.value);

    if(guessNumber === 0) {
        message.textContent = 'No Number Please Enter Again';
    } else {
        if(labelScore > 0) {
            if(guessNumber != randomNumber) {
                message.textContent = guessNumber > randomNumber ? "Too high" : "Too low";
                labelScore--;
                score.textContent = labelScore;
            }
        
            if(guessNumber == randomNumber) {
                message.textContent = 'Equal'
                if(labelScore > highscore) {
                    highscore = labelScore;
                    document.querySelector('.highscore').textContent = highscore;
                }
                document.querySelector('.highscore').textContent = highscore;
                document.querySelector('body').style.backgroundColor = "green";
                document.querySelector('.number').textContent = guessNumber;
                document.querySelector('.number').style.width = '30rem';
                btnCheck.disabled = true;
            }
        } else {
            message.textContent = 'Lose The Game';
        }
    }

});

againBtn.addEventListener('click', function() {
   randomNumber = Math.trunc(Math.random() * 20) + 1;
   console.log(randomNumber);
   labelScore = 20;
   score.textContent = labelScore;
   document.querySelector('.number').textContent = '?';
   document.querySelector('body').style.backgroundColor = "black";
   document.querySelector('.number').style.width = '15rem';
   guess.value = '';
   message.textContent = 'Start guessing...'
   btnCheck.disabled = false;
})
