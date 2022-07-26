let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let time = document.querySelector('.time');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let container = document.querySelector('.container');

let cards = ['1','2','3','4','1','2','3','4']

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
    let cardBack = document.createElement('Back');
    let cardSpan = document.createElement('span');
    cardBack.setAttribute('class','card-back');
    cardSpan.textContent = card;
    cardBack.append(cardSpan);
    container.append(cardBack);
    cardBack.addEventListener('click', () => {
        cardBack.classList.add('flipped');
        console.dir(cardBack);
    })
}


