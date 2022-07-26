let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let time = document.querySelector('.time');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let container = document.querySelector('.container');

let cards = ['1','2','3','4','1','2','3','4']
let counter = 0;
let compareList = [];
cards = shuffle(cards);
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

for (card of cards){
    let cardBox = document.createElement('div');
    cardBox.setAttribute('class','card');

    let cardInner = document.createElement('div');
    cardInner.setAttribute('class','card-inner');
    let cardFront = document.createElement('div');
    cardFront.setAttribute('class','card-front');
    let cardFrontSpan = document.createElement('span');
    cardFrontSpan.textContent = '?';
    cardFront.append(cardFrontSpan);

    let cardBack = document.createElement('div');
    let cardBackSpan = document.createElement('span');
    cardBack.setAttribute('class','card-back');
    cardBackSpan.textContent = card;
    cardBack.append(cardBackSpan);

    
    cardInner.append(cardFront);
    cardInner.append(cardBack);
    cardBox.append(cardInner);
    container.append(cardBox);

    cardBox.onclick = function() {
        cardInner.classList.remove('reverse');
        cardInner.classList.add('flipped');
        counter++;
        compareList.push(this);
        setTimeout(()=>{
        if (compareList.length > 1){
          //console.dir(this);
          checkCorrect(cardInner);
        }},1000);
        //console.log(compareList);
        startTimer();
        win();
    }
}
let timer;
function startTimer(){
  if (timer){
      clearInterval(timer);
  }
  timer = setInterval(updateTimer, 100);
};
let win = function(){
  if (counter == 8){
    clearInterval(timer);
    time.html = "";
    finishTime = sec.textContent + 'sec ' + milisec.textContent + 'mili sec'
    time.textContent = `${finishTime}이 걸려 성공했습니다.✨`;
  }
}
function updateTimer(){
  changedMiliSec = +milisec.textContent + 1
  if (changedMiliSec < 10) {
      changedMiliSec= paddingZero(changedMiliSec);
  }
  else if ( 59 <= changedMiliSec ) {
      changedMiliSec = '00'
      changedSec = +sec.textContent + 1
      if (changedSec < 10) {
          changedSec = paddingZero(changedSec);
      }
      sec.textContent = changedSec;
  }
  milisec.textContent = changedMiliSec;
  

}
function paddingZero(timeContent) {
  return '0'+ timeContent
}
function checkCorrect(){
  if (compareList[0].textContent.slice(1) === compareList[1].textContent.slice(1)) {
    console.log('correct');
  }
  else{
    for (comparedCard of compareList){
      comparedCard.firstChild.classList.remove('flipped');
      comparedCard.firstChild.classList.add('reverse');
    }
  }
  compareList = [];
}


