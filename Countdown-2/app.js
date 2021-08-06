'use strict';

const timeDivs = document.querySelectorAll('.time .num');
const container = document.querySelector('.container');

const futureDate = new Date(2022, 6, 13, 2, 57, 0);
const futureTime = futureDate.getTime();

function remainingTime()
{
    let today = new Date().getTime();

    let timeLeft = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(timeLeft / oneDay);
    let hours = Math.floor((timeLeft % oneDay) / oneHour);
    let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
    let seconds = Math.floor((timeLeft % oneMinute) / oneSecond);

    let times = [days, hours, minutes, seconds];

    timeDivs.forEach((item, index)=>
    {
        item.innerHTML = times[index];        
    });

    if(timeLeft < 0)
    {
        container.innerHTML = "BOOM!"
    }
}

setInterval(()=>
{
    remainingTime();
}, 1000);