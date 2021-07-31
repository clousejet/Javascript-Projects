const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.querySelectorAll('.whiteBox');

imgBox.addEventListener('dragstart', (event) =>
{
    event.target.classList.add('hold');
    setTimeout(function()
    {
        event.target.classList.add('hide');
    }, 0);
});

imgBox.addEventListener('dragend', (event) =>
{
    event.target.classList.remove('hold');
    event.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes)
{
    whiteBox.addEventListener('dragover', (event) =>
    {
        event.preventDefault();
    });
    whiteBox.addEventListener('drop', (event) =>
    {
        event.target.append(imgBox);
    });
}