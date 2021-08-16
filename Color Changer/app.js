colorChangerBtn = document.getElementById('color-changer');
colorChangerBtn.addEventListener('click', generateRandomColor);

function generateRandomColor()
{
    let randomColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
    document.body.style.background = randomColor;
}

function random(num)
{
    return Math.floor(Math.random() * num) + 1;
}