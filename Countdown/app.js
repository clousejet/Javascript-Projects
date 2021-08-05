const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const giveawayDate = document.getElementById('date');
const items = document.querySelectorAll('.time h1');
const countDown = document.querySelector('.countdown');

let futureDate = new Date(2021, 07, 5, 17, 57, 0);
const day = futureDate.getDay();
const date = futureDate.getDate();
const month = futureDate.getMonth();
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let meridian;
if(hours >= 12)
{
    meridian = "PM";
}
else
{
    meridian = "AM";
}

giveawayDate.textContent = `${weekDays[day]}, ${date} ${months[month-1]} ${year} ${hours}:${minutes} ${meridian}`;

const futureTime = futureDate.getTime();

function getRemainingTime()
{
    const today = new Date().getTime();
    const timeLeft = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(timeLeft/oneDay);
    let hours = Math.floor((timeLeft % oneDay) / oneHour);
    let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
    let seconds = Math.floor((timeLeft % oneMinute) / oneSecond);

    let values = [days, hours, minutes, seconds];
    items.forEach(function(item, index)
    {
        item.innerHTML = values[index];
    });
    if(timeLeft < 0)
    {
        countDown.innerHTML = "<h1><strong> Sorry, this giveaway has expired!</strong></h1>";
    }
}

setInterval(function()
{
    getRemainingTime();
}, 1000);