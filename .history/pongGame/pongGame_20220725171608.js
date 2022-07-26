// 게임 규칙
// 필요 요소 정의

let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'navy';
canvas.style.width = '80vw';
canvas.style.height = '70vh';
canvas.style.borderRadius = '10px';



if (canvas.getContext){
    const ctx = canvas.getContext('2d');
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(scaleX/2, 0);
    ctx.lineTo(scaleX/2, scaleY);
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.font = '10px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('round 5', canvas.width/2, 10);
}

// 필요 이벤트 정의
// 기능 단위 나누기