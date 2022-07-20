let answerContainer = document.querySelector('.answerContainer');
let alphabetContainer = document.querySelector('.alphabetContainer');
let hintButton = document.querySelector('.hint');
let playAgainButton = document.querySelector('.playAgain');
let lives = document.querySelector('.lives');
let hangmanContainer = document.querySelector('.hangmanContainer');

let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g','h',
     'i', 'j','k','l','m','n','o','p','q',
     'r','s','t','u','v','w','x','y','z'
]
let answerOptions = [
    'paris','sydney','cairo','seoul','santiago','rome','dokyo','newyork','chicago'
]
let answerCity = answerOptions[getRandomNum(answerOptions.length)]
function getRandomNum(num){
    return Math.floor(Math.random()* num);
}
console.log(answerCity);

for (let i = 0; i< alphabet.length; i++){
    let alpha = document.createElement('span');
    alpha.setAttribute('class', 'alphabet');
    alpha.textContent =alphabet[i];
    alphabetContainer.append(alpha);

    alpha.addEventListener('click', (event)=>{
        checkAnswer(event.target);
        alpha.style.visibility = 'hidden';
    })
}
function checkAnswer(alpha){
    if (alpha in answerCity){
        console.log(alpha);
    }
    else{
        console.log('wrong');
    }
}