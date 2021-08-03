const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('button');
const color = document.querySelector('#color-code');
btn.addEventListener('click', (event)=>
{
    let hexColor = '#';
    for (let i = 0; i < 6; i++)
    {
        let randomElement = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomElement];
    }
    color.textContent = hexColor;
    document.body.style.background = hexColor;
});