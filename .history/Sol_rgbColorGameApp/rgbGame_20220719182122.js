let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let messageDisplay = document.querySelector('.message');
let h1 = document.querySelector(h1);
let resetButton = document.querySelector('.reset');
let modeButtons = document.querySelectorAll('.mode');
let easyButton = document.querySelector('.mode');

init();

function init(){
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}

resetButton.addEventListener('click',function(){
    reset();
});

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click',function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct';
                resetButton.textContent = 'Play again';
                changeColor(pickedColor);
            }
            else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try again';
            }
        });
    }
}

function setupMode(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].classList.remove('selected');
    }
    this.classList.add('selected');
}