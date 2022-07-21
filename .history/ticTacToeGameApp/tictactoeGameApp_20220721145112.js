let gameBoard = document.querySelector('.gameBoard');
let grids = document.querySelectorAll('.grid');

let popUp = document.querySelector('.popUp');
let buttons = document.querySelector('.buttonContainer');
let xButton = document.querySelector('.markingX');
let oButton = document.querySelector('.markingO');
let notSelected = [0,  6, 7, 8, 9];
user = {}
computer = {}

buttons.addEventListener('click', event =>{
    if (event.target.tagName === 'BUTTON'){
        if (event.target.textContent === 'X'){
            user['mark'] = 'X';
            computer['mark'] = 'O';
        }
        else{
            user['mark'] = 'O';
            computer['mark'] = 'X';
        }
    }
    popUp.classList.remove("showPopUp");
    
    startGame();
});

function startGame(){
    playComputer();
    playUser();
    if (checkWinner()){
        finishGame();
    }
    else{
        startGame();
    }
}
function playUser(){
    return
}
function playComputer(){
    let num = getRandomNumber(notSelected);
    console.log(num);
}
function getRandomNumber(remainNum){
    let num = Math.floor(Math.random()*9);
    if (remainNum.indexOf(num) !== -1){
        return num
    } else {
        return getRandomNumber(remainNum)
    }
}
function checkWinner(){
    return true
}
function finishGame(){
    return
}
