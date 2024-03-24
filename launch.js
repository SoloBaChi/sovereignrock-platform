
// set counter down date
let countDownDate =  new Date("may 30, 2024 00:00:00").getTime();//store the time and date when the countdown wil


// create an interval
let interval = setInterval(()=>{
let now = new Date().getTime(); //to get the current date and time
let distance = countDownDate - now;
// console.log(distance)

// calculate the distance for the days,hours,minutes and seconds
 let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
     hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
     minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
     seconds = Math.floor((distance % (1000 * 60)) / (1000));

 let timers = document.querySelectorAll('.launch-time p');
 const[d,h,m,s]  = timers;
     d.innerHTML = days;
     h.innerHTML = hours;
     m.innerHTML = minutes;
     s.innerHTML = seconds;

     if(distance < 0){
     // clear the interval
      clearInterval(interval);
     d.innerHTML = "00";
     h.innerHTML = "00";
     m.innerHTML = "00";
     s.innerHTML = "00";
     }
},1000)
