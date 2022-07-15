let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let startBtn = document.querySelector(".startButton");
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');
let timer;
/* setInterval보다 setTimeout이 정확성이 더 좋다고 해서 nested setTimeout을 쓰고 싶은데 2번째
nested되는 2번째 timer를 멈추지 못하게 하는게 까다롭네요.. 일단 setInterval로 구현해서 완성한 뒤
고쳐보겠습니다. */ 
/* 으 아닛.. setTimeout이고 setInterval이고의 문제가 아닌가봐요.. 아직도 같은 문제가 일어나네요. */
// let startTimer = (timer) => {
//     timer = setTimeout(function updateTimer(){
//         console.log('tick!');
//         timer = setTimeout(updateTimer,1000);
//     }, 1000);
// };
// let stopTimer = (timer) => {
//     setTimeout(() => clearTimeout(timer),1000);
// };
// let resetTimer = () => {

// };

function startTimer(){
    if (timer){
        clearInterval(timer);
    }
    timer = setInterval(updateTimer, 1000);
};
function stopTimer() {
    clearInterval(timer);
};
let resetTimer = () => {

};
function updateTimer(){
    changedSec = +sec.textContent + 1
    if (changedSec < 10) {
        changedSec= paddingZero(changedSec);
    }
    elif ( 59 <= changedSec ) {
        changedSec = '00'
        changedMin = +min.textContent + 1
        if (changedMin < 10) {
            changedMin = paddingZero(changeMin);
        }
    }
    sec.textContent = changedSec;
    min.textContent = changedMin;
  
}
function paddingZero(timeContent) {
    return '0'+ timeContent
}
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