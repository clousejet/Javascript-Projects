const toggler = document.getElementById('toggle');
const links = document.querySelector('.links');

toggler.addEventListener('click', ()=>
{
    if(links.classList.contains('show-links'))
    {
        links.className = "links";
    }
    else
    {
        links.className = "show-links";
    }
});