const btns = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

btns.forEach(function(btn)
{
    btn.addEventListener('click', function(event)
    {
        const id = event.target.dataset.id;
        if(id)
        {
            btns.forEach(function(btn)
            {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }
        contents.forEach(function(content)
        {
            content.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    });
});