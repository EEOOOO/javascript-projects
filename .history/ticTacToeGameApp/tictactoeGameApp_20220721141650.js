let gameBoard = document.querySelector('.gameBoard');
let grids = document.querySelectorAll('.grid');

let popUp = document.querySelector('.introPopUp');
let buttons = document.querySelector('.buttonContainer');
let xButton = document.querySelector('.markingX');
let oButton = document.querySelector('.markingO');

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
    console.dir(user);
    console.dir(computer);
});

