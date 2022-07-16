let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let ampm = document.querySelector('.ampm');


function styleTime(time){
    if (time < 10){
        console.log(Number('0'+time))
        return Number('0'+time)
    } else {
        return time
    }
}
setInterval(()=> {
    let date = new Date();
    let [currentHour, currentMin, currentSec] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    console.log(currentHour, currentMin, currentSec);
    if (12 < currentHour) {
        currentHour = currentHour - 12;
        ampm.textContent = 'pm';
    } else {
        ampm.textContent = 'am';
    }
    hour.textContent = styleTime(currentHour);
    min.textContent = styleTime(currentMin);
    sec.textConent = styleTime(currentSec);
},1000)




