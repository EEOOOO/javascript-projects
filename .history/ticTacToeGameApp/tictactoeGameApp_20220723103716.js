let gameBoard = document.querySelector('.gameBoard');
let grids = document.querySelectorAll('.grid');

let popUp = document.querySelector('.popUp');
let buttons = document.querySelector('.buttonContainer');
let xButton = document.querySelector('.markingX');
let oButton = document.querySelector('.markingO');
let notSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let winningSet = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];
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
let computerTurn = true;
function startGame(){
    if(computerTurn) playComputer();
    if(!computerTurn) playUser();  
}
function playUser(){
    gameBoard.removeEventListener('click', userClickHandler);
    gameBoard.addEventListener('click', userClickHandler, {once:true});
    
}
function userClickHandler(event){
    if (event.target.tagName === 'DIV'){
        let gridClass = '.'+ event.target.classList[1];
        let num = gridClass.charAt(gridClass.length-1);
        drawMark(gridClass, int(num), user['mark']);
        user['clicked'].push(num);
        console.log(`user ${user['clicked']}`);
        
        if (checkWinner()){
            finishGame();
        } else {
            computerTurn = true;
            setTimeout(startGame,500);
        }
    }
}
function playComputer(){
    let num = getRandomNumber(notSelected);
    let gridClass = '.grid'+num;
    computer['clicked'].push(num.toString());
    console.log(`computer ${computer['clicked']}`);
    drawMark(gridClass, num, computer['mark']);
    computerTurn = false;    
}
function drawMark(gridClass, num, mark){
    let grid = document.querySelector(gridClass);
    let markingSpan = document.createElement('span');
    markingSpan.textContent = mark;
    
    grid.append(markingSpan);

    notSelected.splice(num, 1);
    console.log(notSelected);
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
    for (set of winningSet){
        if (set in computer['clicked']){
            console.log(set, computer['clicked']);
        }
        if (set in user['clicked']){
            console.log(set, user['clicked']);
        }
    }
    return false
}
function finishGame(){
    gameBoard.removeEventListener('click', userClickHandler);
    console.log('finish');
    return
}
