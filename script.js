'use strict';
let guess = document.querySelector('.guess');
let checkBtn = document.querySelector('.btn.check');
let againBtn = document.querySelector('.btn.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(randomNumber);

checkBtn.addEventListener('click', function() {
    let guessNumber = Number (guess.value);

    if(guessNumber === 0) {
        document.querySelector('.message').textContent = 'No Number Please Enter Again';
    } else {
        if(score > 0) {
            if(guessNumber > randomNumber) {
                document.querySelector('.message').textContent = "Too high"
                score--;
                document.querySelector('.score').textContent = score;
            }
        
            if(guessNumber < randomNumber) {
                document.querySelector('.message').textContent = 'Too low'
                score--;
                document.querySelector('.score').textContent = score;
            }
        
            if(guessNumber == randomNumber) {
                document.querySelector('.message').textContent = 'Equal'
                if(score > highscore) {
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                }
                document.querySelector('.highscore').textContent = highscore;
                document.querySelector('body').style.backgroundColor = "green";
                document.querySelector('.number').textContent = guessNumber;
                document.querySelector('.number').style.width = '30rem';
                checkBtn.disabled = true;
            }
        } else {
            document.querySelector('.message').textContent = 'Lose The Game';
        }
    }

});

againBtn.addEventListener('click', function() {
   randomNumber = Math.trunc(Math.random() * 20) + 1;
   console.log(randomNumber);
   score = 20;
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('body').style.backgroundColor = "black";
   document.querySelector('.number').style.width = '15rem';
   guess.value = '';
   document.querySelector('.message').textContent = 'Start guessing...'
   checkBtn.disabled = false;
})
