const toggler = document.querySelector('.fa');
const sidebar = document.querySelector('.links');
toggler.addEventListener('click', function()
{
    if(sidebar.style.display === "none")
    {
        sidebar.style.display = "flex";
    }
    else
    {
        sidebar.style.display = "none";
    }
});

const date = document.getElementById('date');
let now = new Date();
let currentYear = now.getFullYear();
date.textContent = currentYear;

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', (event)=>
{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight)
    {
        navbar.style.boxShadow = "0 2px 2px rgba(0, 0, 0, 0.25)";
    }
    else
    {
        navbar.style.boxShadow = "none";
    }
});

const scrollLinks = document.querySelectorAll('a')
scrollLinks.forEach(function(scrollLink)
{
    scrollLink.addEventListener('click', function(event)
    {
        event.preventDefault();
        
        let navHeight = navbar.getBoundingClientRect().height;
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navHeight;
        window.scrollTo(
            {
                left: 0,
                top: position
            });
        position = position - navHeight;
    });
});