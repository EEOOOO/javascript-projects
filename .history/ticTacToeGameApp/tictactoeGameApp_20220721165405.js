let gameBoard = document.querySelector('.gameBoard');
let grids = document.querySelectorAll('.grid');

let popUp = document.querySelector('.popUp');
let buttons = document.querySelector('.buttonContainer');
let xButton = document.querySelector('.markingX');
let oButton = document.querySelector('.markingO');
let notSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
user = {'clicked':[]}
computer = {'clicked':[]}

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
    setTimeout(playComputer());
    playUser();
    if (checkWinner()){
        finishGame();
    }
    else{
        console.log('game');
        startGame();
    }
}
function playUser(){
    setTimeout(gameBoard.addEventListener('click', event => userClickHandler(event), {once:true}));
    
    return
}
function userClickHandler(event){
    if (event.target.tagName === 'DIV'){
        let gridClass = '.'+ event.target.classList[1];
        let num = gridClass.charAt(gridClass.length-1);
        drawMark(gridClass, num, user['mark']);
        user['clicked'].push(num);
        console.log(user);
    }
}
function playComputer(){
    let num = getRandomNumber(notSelected);
    let gridClass = '.grid'+num;
    computer['clicked'].push(num.toString());
    console.log(computer);
    drawMark(gridClass, num, computer['mark']);
    
}
function drawMark(gridClass, num, mark){
    let grid = document.querySelector(gridClass);
    let markingSpan = document.createElement('span');
    markingSpan.textContent = mark;
    
    grid.append(markingSpan);

    notSelected.splice(num, 1);
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
    if (computer['clicked'].indexOf('0') != -1){
        return true
    }
    return false
}
function finishGame(){
    console.log('finish');
    return
}
