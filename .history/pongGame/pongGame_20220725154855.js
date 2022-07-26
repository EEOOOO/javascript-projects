// 게임 규칙
// 필요 요소 정의
let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'navy';
canvas.style.width = '80vw';
canvas.style.height = '50vh';
canvas.style.borderRadius = '10px';
let ball = document.createElement('div');
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'black';
canvas.append(ball);
// 필요 이벤트 정의
// 기능 단위 나누기