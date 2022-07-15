let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let startBtn = document.querySelector(".startButton");
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');
let timer;

let startTimer = (timer) => {
    timer = setTimeout(function updateTimer(){
        console.log('tick!');
        timer = setTimeout(updateTimer,1000);
    }, 1000);
};
let stopTimer = (timer) => {
    clearTimeout(timer);
};
let resetTimer = () => {

};

startBtn.addEventListener('click', function() {
    console.log('click start');
    startTimer(timer);
});
stopBtn.addEventListener('click', function() {
    console.log('click stop');
    stopTimer(timer);
});
resetBtn.addEventListener('click', function() {
    console.log('click reset');
    resetTimer();
});