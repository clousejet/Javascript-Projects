'use strict';

const APIURL = "https://api.github.com/users/";  
const profile = document.querySelector('.profile');
const userInput = document.getElementById('user');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () =>
{
    if(userInput)
    {
        fetchUser(userInput.value);
    }
}); 

async function fetchUser(username)
{
    userInput.focus();
    username = username.split(" ").join("-");
    let response = await fetch(APIURL + username);
    let responseData = await response.json();

    console.log(responseData);

    if('message' in responseData)
    {
        profile.innerHTML = "<h1> No Users Found! </h1>";
    }
    else
    {
        showProfile(responseData);
    }
}

function showProfile(data)
{
    let html = `<div class="header">
                    <img src="${data.avatar_url}" alt="${data.login}">
                </div>
                <div class="body">
                    <p><strong>Username: </strong>${data.login}</p>
                    <p><strong>Joining Date: </strong>${data.created_at.slice(0, data.created_at.indexOf('T'))}</p>
                    <p><strong>Repositories: </strong>${data.public_repos}</p>
                </div>
                <div class="footer">
                    <p><strong>Followers: </strong>${data.followers}</p>
                    <p><strong>Following: </strong>${data.following}</p>
                    <p><strong>URL: </strong><a href = "${data.html_url}" target = "_blank">${data.login}</a></p>
                </div>`;

    profile.innerHTML = html;
}