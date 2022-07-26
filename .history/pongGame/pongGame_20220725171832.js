// 게임 규칙
// 필요 요소 정의

let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'navy';
canvas.width = '80vw';
canvas.height = '70vh';
canvas.style.borderRadius = '10px';

console.dir(canvas);
if (canvas.getContext){
    const ctx = canvas.getContext('2d');
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.font = '10px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('round 5', canvas.width/2, 10);
}

// 필요 이벤트 정의
// 기능 단위 나누기