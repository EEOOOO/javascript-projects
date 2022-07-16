let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let ampm = document.querySelector('.ampm');


function styleTime(time){
    if (time < 10){
        return time
    }
}
setInterval(()=> {
    let date = new Date();
    const [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    console.log(hours, mins, secs, typeof(hours));
},1000)




