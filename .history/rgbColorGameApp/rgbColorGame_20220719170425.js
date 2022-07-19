let playGameBtn = document.querySelector('.playNewGameButton');
let stateMessage = document.querySelector('.stateMessage');
let header = document.querySelector('.header');
let rgbQuestion = document.querySelector('.rgbQuestion');
let gameModes = document.querySelector('.modes');
let cssRoot = document.querySelector(":root");
let colorBox = document.querySelectorAll(".colorBox");

// playGameBtn누를 때, easy/hard누를 때 게임 초기화 시행
playGameBtn.addEventListener('click',()=>{
    console.log('play');
    initGame(6);
});
gameModes.addEventListener('click',(event)=>{
    if (event.target.tagName == 'SPAN'){
        initGame();
    }
})

function initGame(){
    // 랜덤 색 7개 뽑기
    let boxNum = 7
    let randomColors = makeRandomRGB(boxNum);
    
    // 그 중 하나 정답 색 , rgbQuestion 글자 넣어주기
    let answer = randomColors[Math.floor(Math.random() * 6)];
    rgbQuestion.textContent = answer;

    // 박스 세팅
    setBoxes(randomColors, answer);

    // 그 중 마지막 색으로 헤더 색 변경
    let initHeaderColor = randomColors[randomColors.length-1];
    cssRoot.style.setProperty('--color-now',initHeaderColor);
}
function setBoxes(randomColors, answer){
    for (let i = 0; i < randomColors.length-1; i++){
        colorBox[i].style.visibility = 'visible'
        colorBox[i].style.backgroundColor = randomColors[i];
        colorBox[i].addEventListener('click', event => checkBoxIsAnswer(event, answer));
    }
}
function checkBoxIsAnswer(event, answer){
    if (answer[0] == event.target.style.backgroundColor){
        for (box of colorBox){
            box.style.backgroundColor = answer[0];
            cssRoot.style.cssText = `--color-now:${answer[0]}`;
            stateMessage.textContent = 'CORRECT';
            removeBoxEvent();
        }
    }
    else{
        event.target.style.visibility = 'hidden';
        stateMessage.textContent = 'TRY AGAIN';
    }
}
function removeBoxEvent(){
    for (box of colorBox){
        box.removeEventListener('click',event => checkBoxIsAnswer(event, answer));
    }
}
function makeRandomRGB(num){
    let randomColors = [];
    for (let i = 0; i < num; i++){ 
        let r = getRandomArbitrary(1,255);
        let g = getRandomArbitrary(1,255);
        let b = getRandomArbitrary(1,255);
        randomColors.push([`rgb(${r}, ${g}, ${b})`]);
    }
    return randomColors;
}
// min, max bind로 값 고정 못 시키나?
function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}    