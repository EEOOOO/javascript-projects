// 게임 규칙
// 필요 요소 정의
let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'navy';
canvas.style.width = '80vw';
canvas.style.height = '70vh';
canvas.style.borderRadius = '10px';

if (canvas.getContext){
    const ctx = canvas.getContext('2d');
    console.log(ctx.width, ctx.height);
    ctx.setLineDash([1, 1]);
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 200);
    ctx.strokeStyle = 'white';
    ctx.stroke();
}

// 필요 이벤트 정의
// 기능 단위 나누기