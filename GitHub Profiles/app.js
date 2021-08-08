const APIURL = 'https://api.github.com/users/';
const form = document.querySelector('.form-group');
const profile = document.querySelector('.profile');

async function getUser(user)
{
    const response = await fetch(APIURL + user);
    const responseData = await response.json();

    if('message' in responseData)
    {
        profile.innerHTML = "<h1> No User Found! </h1>"
    }
    else
    {
        let html = `<div class="profile-header">
                        <img src="${responseData.avatar_url}" alt="${responseData.name}">
                        <p>Name: ${responseData.name}</p>
                        <p>Joined On: ${responseData.created_at.substr(0, 10)}</p>
                    </div>
                    <div class="profile-body">
                        <p>${responseData.bio}</p>
                        <p><strong>URL:</strong><a href = "${responseData.html_url}" target = "_blank">${responseData.name}</a></p>
                        <p><strong>Repositories:</strong>${responseData.public_repos}</p>
                    </div>`;
        
        profile.innerHTML = html;
    }
}

form.addEventListener('submit', (event)=>
{
    event.preventDefault();
    const searchTerm = document.getElementById('search').value;
    if(searchTerm !== "" && searchTerm !== null)
    {
        getUser(searchTerm);
    }
});