let gameBoard = document.querySelector('.gameBoard');
let grids = document.querySelectorAll('.grid');

let popUp = document.querySelector('.popUp');
let popUpTitle = document.querySelector('.popUpTitle'); 
let popUpMessage = document.querySelector('.popUpMessage');
let popUpStrongMessage = document.querySelector('.popUpStrongMessage');

let buttons = document.querySelector('.buttonContainer');
let xButton = document.querySelector('.markingX');
let oButton = document.querySelector('.markingO');

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
let notSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let user = {'clicked':[]}
let computer = {'clicked':[]}
let computerTurn = true;

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
    initGame();
    setTimeout(startGame,300);
});

function initGame(){
    notSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    user['clicked'] = [];
    computer['clicked'] = [];
    computerTurn = true;
    grids.forEach(grid => grid.textContent = '');
}

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
        user['clicked'].push(num);
        drawMark(gridClass, Number(num), user['mark']);
        if (checkWinner(user['clicked'])){
            finishGame('You');
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
    drawMark(gridClass, num, computer['mark']);
    if (checkWinner(computer['clicked'])){
        finishGame('Computer');
    } 
    computerTurn = false;    
}

function drawMark(gridClass, num, mark){
    let grid = document.querySelector(gridClass);
    let markingSpan = document.createElement('span');
    markingSpan.textContent = mark;
    grid.append(markingSpan);

    let numIndex = notSelected.indexOf(num);
    notSelected.splice(numIndex, 1);
}

function getRandomNumber(remainNum){
    let num = Math.floor(Math.random()*9);
    if (remainNum.indexOf(num) !== -1){
        return num
    } else {
        return getRandomNumber(remainNum)
    }
}

function checkWinner(clickedList){
    if (clickedList.length < 3){
        return false
    }    
    if (user['clicked'].length + computer['clicked'].length == 9){
        finishGame('Nobody');
    }
    for (set of winningSet){
        if (set.every(num => clickedList.indexOf(num) != -1)) {
            return true
        }
    }
    return false
}

function finishGame(winner){
    gameBoard.removeEventListener('click', userClickHandler);

    popUpTitle.textContent = (`${winner} win!!`);
    popUpMessage.textContent = '';
    switch(winner){
        case 'Computer':
            popUpStrongMessage.textContent = 'I was smarter than you! 😈😈'
            break
        case 'You':
            popUpStrongMessage.textContent = 'You were smarter than me! 😻😻'
            break
        case 'Nobody':
            popUpStrongMessage.textContent = 'Cannot move 😵 Try Again 😟'

    }
    
    popUp.classList.add("showPopUp");
    console.log('finish');
    return
}
