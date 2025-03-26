'use strict';
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
console.log(secretNumber);

let score=document.querySelector('.score').innerHTML = 20;
console.log(score)
let highscore = 0;

const displaymessage = function (message){
document.querySelector('.message').textContent = message;
    
} 

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        
        if(guess>secretNumber){
            document.querySelector('.message').innerHTML="Too high"
            score--;
            document.querySelector('.score').innerHTML=score;
            console.log(score);
        }
        else if(guess<secretNumber){
            document.querySelector('.message').innerHTML="Too low"

            score-=1;
            document.querySelector('.score').innerHTML=score;
        }
        else{
             document.querySelector('.message').innerHTML="Correct Number"
             document.body.style.backgroundColor="green";
             document.querySelector('.Number').innerHTML=secretNumber;
             document.querySelector('.highscore').innerHTML=score;
             score--;
             document.querySelector('.score').innerHTML=score;

        }
        
        });
        document.querySelector('.again').addEventListener('click',function(){
            score = 20;
            document.querySelector('.message').innerHTML='start guessing...';
            document.querySelector('.score').textContent = score;
            document.querySelector('.Number').innerHTML='?';
            

            document.querySelector('body').style.backgroundColor = 'balck';
            

        });