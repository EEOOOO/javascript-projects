let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let startBtn = document.querySelector(".startButton");
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');

startBtn.addEventListener('click', function() {
    console.log('click start');
});
stopBtn.addEventListener('click', function() {
    console.log('click stop');
});
resetBtn.addEventListener('click', function() {
    console.log('click reset');
});