'use strict';
let score = 20
let high = 0
let guessNumber = Math.trunc(Math.random()*20)+1
var display = document.querySelector('.message')
const checkButton = document.querySelector('.check')
checkButton.addEventListener('click',function(){
    const enteredNumber = Number(document.querySelector('.guess').value)
    if(!enteredNumber){
        display.textContent = "No Number";
    }
    else{
        if(guessNumber === enteredNumber){
            if(score > high){
                high = score
                document.querySelector('.highscore').textContent = high
            }
            display.textContent = "Hurray You entered the correct number";
            document.querySelector('.number').textContent = guessNumber
            document.querySelector('body').style.backgroundColor = 'green'
            document.querySelector('.number').style.width = '30rem'
        }
        else if(enteredNumber > guessNumber){
            if(score > 1){
            display.textContent = "Too High"
            score--;
            document.querySelector('.score').textContent = score
            }
            else{
                display.textContent = "You lost the Game";
            }
        }
        else if(enteredNumber < guessNumber){
            if(score > 1){
            display.textContent = "Too Low"
            score--;
            document.querySelector('.score').textContent = score
            }
            else{
                display.textContent = "You lost the Game";
            }
        }
    }
})

var defaultScreen = document.querySelector('.again')
defaultScreen.addEventListener('click',function(){
    display.textContent = 'Start guessing...'
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').value = ''
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.number').style.width = '15rem'
})