const toggler = document.getElementById('toggle');
const links = document.querySelector('.links');

toggler.addEventListener('click', ()=>
{
    if(links.className === "links")
    {
        links.className = "show-links";
    }
    else
    {
        links.className = "links";
    }
});