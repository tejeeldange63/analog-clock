setInterval(() => {
    var time = new Date();
    hour = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    // console.log(hour);
    // console.log(min);
    // console.log(sec);
    let RoHour = 30*hour + min/2;
    let Romin = 6*min;
   let  Rosec = 6*sec;
    //   console.log(RoHour);
    // console.log(Romin);
    // console.log(Rosec);
    var hr = document.getElementById('hour');
    var mi = document.getElementById('minute');
    var se = document.getElementById('second');
    hr.style.transform = `rotate(${RoHour}deg)`;
    mi.style.transform = `rotate(${Romin}deg)`;
    se.style.transform = `rotate(${Rosec}deg)`;

},1000)



  



