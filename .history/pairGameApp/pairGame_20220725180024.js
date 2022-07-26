let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let time = document.querySelector('.time');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let container = document.querySelector('.container');

let cards = ['1','2','3','4','1','2','3','4']
#cards = mixCards(cards);

for(let i = 0; cards.length; i++){
    const card = document.createElement('div');
    card.setAttribute('class','card');
    card.textContent

function mixCards(cards){
    let randomNumList = getRandomList(cards);
    print(randomNumList);
    return cards
}