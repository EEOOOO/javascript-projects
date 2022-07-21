let gameBoard = document.querySelector('.gameBoard');
let grids = document.querySelectorAll('.grid');

let popUp = document.querySelector('.introPopUp');
let buttons = document.querySelector('.buttonContainer');
let xButton = document.querySelector('.markingX');
let oButton = document.querySelector('.markingO');

user = {}
computer = {}

buttons.addEventListener('click', event =>{
    console.dir(event.target);
    if (event.target.className == 'BUTTON'){
        console.log(event.target);
        }
});

