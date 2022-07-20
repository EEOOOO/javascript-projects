let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let messageDisplay = document.querySelector('.message');
let h1 = document.querySelector('h1');
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
        modeButtons[i].addEventListener('click',function(){
            for(let i = 0; i < modeButtons.length; i++){
                modeButtons[i].classList.remove('selected');
            }
            this.classList.add('selected');
            if(this.textContent == 'Easy'){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset(){
    colors = genRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#2c8e99";
    resetButton.textContent = 'New Game';
    messageDisplay.textContent = '';
    for (let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = 'none';
        }
    }
}

function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
        h1.style.background = color;
    }
}

function chooseColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(makeColor());
    }
    return arr;
}

function makeColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}