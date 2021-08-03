const colors =  ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.querySelector('button');
const color = document.querySelector('#color-code');

btn.addEventListener('click', (event)=>
{
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomColor];
    color.textContent = colors[randomColor];
});