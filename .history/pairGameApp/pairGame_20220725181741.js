let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let time = document.querySelector('.time');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let container = document.querySelector('.container');

let cards = ['1','2','3','4','1','2','3','4']

cards = shuffle(cards);

for (card of cards){
    let cardDiv = document.createElement('div');
    let cardSpan = document.createElement('span');
    cardDiv.setAttribute('class','card');
    cardSpan.textContent = card;
    cardSpan.style.color = 'darkgrey';
    cardDiv.append(cardSpan);
    cardDiv.style.backgroundColor = 'lightblue';
    cardDiv.style.height = '5rem';
    cardDiv.style.width = '3rem';
    cardDiv.style.margin = '1em';
    cardDiv.style.display = 'block';
    cardDiv.style.justifyContent = 'center';
    cardDiv.style.alignItems = 'center';
    cardDiv.style.fontSize = '2rem';
    cardDiv.style.borderRadius = '3px';
    cardDiv.style.border = '2px solid white';
    container.append(cardDiv);
}

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
