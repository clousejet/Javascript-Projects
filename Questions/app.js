const btns = document.querySelectorAll('.trigger');
btns.forEach(function(btn)
{
    btn.addEventListener('click', (event)=>
    {
        if(event.currentTarget.parentElement.parentElement.querySelector('.answer').style.display == "none")
        {
            let questions = document.querySelectorAll('.question');
            questions.forEach((question)=>
            {
                question.querySelector('.answer').style.display = "none";
                question.querySelector('.title').querySelector('button').textContent = "+";
            });
            let question = event.currentTarget.parentElement.parentElement;
            question.querySelector('.answer').style.display = "block";
            btn.textContent = "-";
        }
        else
        {
            let question = event.currentTarget.parentElement.parentElement;
            question.querySelector('.answer').style.display = "none";
            btn.textContent = "+";
        }
    });
})