let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn)
{
    btn.addEventListener('click', (event)=>
    {
        let btnID = event.currentTarget.id;
        if(btnID === "decrease-btn")
        {
            count--;
        }
        else if(btnID === "reset-btn")
        {
            count = 0;
        }
        else
        {
            count++;
        }
        value.textContent = count;
        if(count > 0)
        {
            value.style.color = "green";
        }
        else if(count == 0)
        {
            value.style.color = "#066de2";
        }
        else
        {
            value.style.color = "red";
        }
    });
});