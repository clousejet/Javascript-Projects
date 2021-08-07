const meals = document.querySelector('.meals');
const slider = document.querySelector('.meal-slider').querySelector('ul');
const searchTrigger = document.querySelector('.fa-search');
const searchBtn = document.getElementById('search');
const searchTerm = document.getElementById('search-term');
const searchBox = document.getElementsByTagName('header')[0];
const nextBtn = document.getElementById('nextRecipe');
const favArray = [];

loadFavMealsFromLocalStorage();

nextBtn.addEventListener('click', async()=>
{
    meals.innerHTML = "";
    getRandomMeal();
});

searchTrigger.addEventListener('click', function()
{
    if(!searchBox.classList.contains('active'))
    {
        searchBox.classList.add('active');
        searchBox.style.display = "block";
        document.querySelector('.navbar').style.boxShadow = "none";
        document.querySelector('.navbar').style.margin = "0";
    }
    else
    {
        searchBox.classList.remove('active');
        searchBox.style.display = "none";
        document.querySelector('.navbar').style.boxShadow = "0 2px 2px rgba(0, 0, 0, 0.25)";
        document.querySelector('.navbar').style.marginBottom = "1rem";
    }
});

searchBtn.addEventListener('click', async()=>
{
    let term = searchTerm.value;
});

async function getRandomMeal()
{
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await response.json();
    const randomMeal = responseData.meals[0];
    
    loadRandomMeal(randomMeal, true);
}

getRandomMeal();

async function getMealById(id)
{
    const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}

function loadRandomMeal(mealData, random = false)
{
    const meal = document.createElement('div');
    meal.className = "meal";
    meal.innerHTML = `<div class="meal-image">
                        <img src="${mealData.strMealThumb}" alt = "${mealData.strMeal}">
                    </div>
                    <div class="meal-info">
                        <p>${mealData.strMeal}<i class="fa fa-heart" onclick = "addToFavMeals(this)"></i></p>
                    </div>`;

    meals.appendChild(meal);
}

function addToFavMeals(heart)
{
    const image = heart.parentElement.parentElement.previousElementSibling.querySelector('img').src;
    const name = heart.parentElement.parentElement.previousElementSibling.querySelector('img').alt;
    
    if(!(heart.classList.contains('active')))
    {
        heart.style.color = "pink";
        heart.classList.add('active');
        
        const favMeal = 
        {
            img: image,
            mealName: name
        }
    
        favArray.push(favMeal);
    
        addMealtoLocalStorage(favArray);
        loadFavMealsFromLocalStorage();
    }
    else
    {
        heart.style.color = "lightgrey";
        heart.classList.remove('active');
        
        deleteMealFromLocalStorage(name);
        loadFavMealsFromLocalStorage();
    }
}

function deleteMealFromLocalStorage(mealName)
{
    slider.innerHTML = "";

    let mealNames = JSON.parse(localStorage.getItem('mealNames'));
    let mealImages = JSON.parse(localStorage.getItem('mealImages'));
    let mealIndex = mealNames.indexOf(mealName);

    favArray.pop();

    mealNames.splice(mealIndex, 1);
    mealImages.splice(mealIndex, 1);

    localStorage.setItem('mealNames', JSON.stringify(mealNames));
    localStorage.setItem('mealImages', JSON.stringify(mealImages));
}

function addMealtoLocalStorage(meal)
{
    slider.innerHTML = "";

    for(let i = 0; i < favArray.length; i++)
    {
        if(localStorage.getItem('mealNames') !== null)
        {
            let mealNames = JSON.parse(localStorage.getItem('mealNames'));
            mealNames.push(meal[i].mealName);
            localStorage.setItem('mealNames', JSON.stringify(mealNames));

            let mealImages = JSON.parse(localStorage.getItem('mealImages'));
            mealImages.push(meal[i].img);
            localStorage.setItem('mealImages', JSON.stringify(mealImages));
        }
        else
        {
            let mealNames = [];
            mealNames.push(meal[i].mealName);
            localStorage.setItem('mealNames', JSON.stringify(mealNames));

            let mealImages = [];
            mealImages.push(meal[i].img);
            localStorage.setItem('mealImages', JSON.stringify(mealImages));
        }
    }
}

function loadFavMealsFromLocalStorage()
{
    slider.innerHTML = "";

    let mealNames = JSON.parse(localStorage.getItem('mealNames'));
    let mealImages = JSON.parse(localStorage.getItem('mealImages'));

    if(mealNames !== null && mealNames !== [] && mealNames !== "" && mealNames.length !== 0)
    {
        for(let i = 0; i < mealNames.length; i++)
        {
            let meal = document.createElement('li');
            meal.innerHTML = `<img src="${mealImages[i]}" alt="${mealNames[i]}">
                                <span>${mealNames[i]}</span><button class = "remove-from-fav" onclick = "removeFromFav(this)">&times;</button>`;

            slider.appendChild(meal);
        }
    }
    else
    {
        slider.innerHTML = `<h3> Click on the heart icon to add to favourites! </h3>`;
    }
}

function removeFromFav(meal)
{
    let mealName = meal.parentElement.firstElementChild.alt;
    let mealImage = document.querySelector('.meal-image');
    
    if(mealImage.firstElementChild.alt == mealName)
    {
        mealImage.nextElementSibling.querySelector('p').querySelector('i').classList.remove('active');
        mealImage.nextElementSibling.querySelector('p').querySelector('i').style.color = "lightgrey";
    }

    deleteMealFromLocalStorage(mealName);
    loadFavMealsFromLocalStorage();

}