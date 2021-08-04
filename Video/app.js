const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.container');

btn.addEventListener('click', ()=>
{
    if(!btn.classList.contains('slide'))
    {
        btn.classList.add('slide');
        video.pause();
    }
    else
    {
        btn.classList.remove('slide');
        video.play();
    }
});

const preloader = document.querySelector('.preloader');
window.addEventListener('load', function()
{
    preloader.style.display = "none";
});