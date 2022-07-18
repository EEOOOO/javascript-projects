let playGameBtn = document.querySelector('.playNewGameButton');
let stateMessage = document.querySelector('.stateMessage');
let header = document.querySelector('.header');
let rgbQuestion = document.querySelector('.rgbQuestion');
let gameModes = document.querySelector('.modes');

// playGameBtn누를 때, easy/hard누를 때 게임 초기화 시행
playGameBtn.addEventListener('click',()=>{
    console.log('play');
    initGame();
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
    // 그 중 첫 번째가 정답 색 , rgbQuestion 글자 넣어주기
    let answer = randomColors[0];
    // 그 중 마지막 색으로 헤더 색 변경
    let initHeaderColor = randomColors[-1];
}
function makeRandomRGB(num){
    let randomColors = 
    for (let i = 0; i < num; i++){
        let r = 
    }
    return 1;
}
function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}
function winGame(){
    // header 색 바꾸기
    // playGameBtn 문구 바꾸기
    // stateMessage변경 (correct)
    // 모든 박스 색 바꾸기
}
function playGame(){
    // 박스 눌리면 
        // 정답인지 체크
        // 맞으면 winGame()
        // 아니면 stateMessage 변경 (try again), 그 박스 제거
}