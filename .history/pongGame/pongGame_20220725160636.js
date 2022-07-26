// 게임 규칙
// 필요 요소 정의
let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'navy';
canvas.style.width = '80vw';
canvas.style.height = '50vh';
canvas.style.borderRadius = '10px';

if (canvas.getContext){
    const ctx = canvas.getContext('2d');
    
    ctx.fillrect(25, 25, 100, 100);
}
let line = document.createElement('div');
line.style.width = '2px';
line.style.height = '50vh';
line.style.backgroundColor = 'white';
canvas.append(line);
console.log(canvas);

let ball = document.createElement('div');
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'black';
canvas.append(ball);
// 필요 이벤트 정의
// 기능 단위 나누기