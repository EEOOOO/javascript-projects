let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let ampm = document.querySelector('.ampm');



setInterval(()=> {
    let date = new Date();
    const [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    console.log(hours, mins, secs);
},1000)




