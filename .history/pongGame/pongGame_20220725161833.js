// 게임 규칙
// 필요 요소 정의
let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'navy';
canvas.style.width = '80vw';
canvas.style.height = '50vh';
canvas.style.borderRadius = '10px';

if (canvas.getContext){
    const ctx = canvas.getContext('2d');
    console.log(ctx.width, ctx.height);
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(70, 0);
    ctx.stroke();
}

// 필요 이벤트 정의
// 기능 단위 나누기