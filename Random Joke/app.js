const APIURL = "https://official-joke-api.appspot.com/jokes/programming/random";
const setup = document.querySelector('.setup');
const punchline = document.querySelector('.punchline');
const oneMoreBtn = document.getElementById('one-more');

oneMoreBtn.addEventListener('click', fetchJoke);

async function fetchJoke()
{
    let response = await fetch(APIURL);
    let responseData = await response.json();

    displayJoke(responseData);
}

function displayJoke(data)
{
    setup.innerHTML = data[0].setup;
    punchline.innerHTML = data[0].punchline;
}

fetchJoke();