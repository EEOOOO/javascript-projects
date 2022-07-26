let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let time = document.querySelector('.time');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let container = document.querySelector('.container');

let cards = ['1','2','3','4','1','2','3','4']
cards = mixCards(cards);

for(let i = 0; cards.length; i++){
    const card = document.createElement('div');
    card.setAttribute('class','card');
    card.textContent
}
function mixCards(cards){
    let randomNumList = getRandomList(cards);
    return cards
}
function getRandomList(cards){
    mixedList = []
    while (cards){
        const randomNum = Math.floor(Math.random()*cards.length);
        if (cards.indexOf(randomNum) != -1){
            mixedList.append(cards[randomNum]);
            cards = cards.splice(randomNum, 1);
        }
    }
    return mixedList;
}
