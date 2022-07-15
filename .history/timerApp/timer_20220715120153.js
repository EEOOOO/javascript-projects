let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let startBtn = document.querySelector(".startButton");
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');

let startTimer = () => {
    let timer = setTimeout(function updateTimer(){
        console.log('tick!');
    }, 1000);
};
let stopTimer = () => {

};
let resetTimer = () => {

};

startBtn.addEventListener('click', function() {
    console.log('click start');
    startTimer();
});
stopBtn.addEventListener('click', function() {
    console.log('click stop');
    stopTimer();
});
resetBtn.addEventListener('click', function() {
    console.log('click reset');
    resetTimer();
});