const tabs = document.querySelectorAll('.tab');
for (let tab of tabs)
{
    tab.addEventListener('click', (event)=>
    {
        for(let tab of tabs)
        {
            if(tab.classList.contains('active'))
            {
                tab.classList.remove('active');
            }
        }
        event.target.classList.add('active');
    });
}