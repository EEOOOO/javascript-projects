let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let ampm = document.querySelector('.ampm');


function styleTime(time){
    time = (time < 10) ? '0'+time : time;
    return time;
}
function showTime(){
    let date = new Date();
    let [currentHour, currentMin, currentSec] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if (12 < currentHour) {
        currentHour = currentHour - 12;
        ampm.textContent = 'pm';
    } else {
        ampm.textContent = 'am';
    }
    hour.textContent = styleTime(currentHour);
    min.textContent = styleTime(currentMin);
    sec.textContent = styleTime(currentSec);
    
    setTimeout(showTime, 1000);
}
showTime();




