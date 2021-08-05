const form = document.querySelector('.form-group');
const numberOfPara = document.getElementById('para-num');
const container = document.querySelector('.container');

const html = "<p class = 'para'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis ipsum quisquam vel dignissimos saepe vero porro blanditiis perspiciatis neque. Ipsum rerum omnis exercitationem velit dolorem magnam tempora harum cupiditate? </p>";

form.addEventListener('submit', (event)=>
{
    event.preventDefault();
    const paraNum = Number(numberOfPara.value);
    
    for(let i = 0; i < paraNum; i++)
    {
        container.innerHTML += html;
    }
});