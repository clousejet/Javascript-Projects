const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1`
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=`;

const movies = document.querySelector('.movies');
const form = document.querySelector('header');
const searchBtn = document.getElementById('searchBtn');
const searchTerm = document.getElementById('search');

async function getMovies()
{
    const response = await fetch(APIURL);
    const responseData = await response.json();

    responseData.results.forEach((movie)=>
    {
        let newMovie = document.createElement('div');
        newMovie.className = "movie";
        newMovie.innerHTML = `<div class="movie-header">
                                <img src="${IMGPATH}${movie.poster_path}" alt = "${movie.title}">
                            </div>
                            <div class="movie-body">
                                <h1>${movie.title}</h1>
                                <span>${movie.vote_average}</span>
                            </div>`;
        movies.appendChild(newMovie);
    });
}

getMovies();

searchBtn.addEventListener('click', (event)=>
{
    if(searchTerm.value !== null && searchTerm.value !== "")
    {     
        movies.innerHTML = "";
        search(searchTerm.value);
    }
});

async function search(query)
{
    const reponse = await fetch(`${SEARCHAPI}+${query}`);
    const responseData = await reponse.json();
    console.log(responseData);

    responseData.results.forEach((movie)=>
    {
        let newMovie = document.createElement('div');
        newMovie.className = "movie";
        newMovie.innerHTML = `<div class="movie-header">
                                <img src="${IMGPATH}${movie.poster_path}" alt = "${movie.title}">
                            </div>
                            <div class="movie-body">
                                <h1>${movie.title}</h1>
                                <span>${movie.vote_average}</span>
                            </div>`;
        movies.appendChild(newMovie);
    });
}