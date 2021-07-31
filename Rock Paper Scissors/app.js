'use strict';

// Defining the function that will handle the inputs
function main(element)
{
    let userElement = element.id;
    let compElement = Math.floor(Math.random() * 3);
    let results = computeElements(userElement, compElement);
    let message = showMessage(results[0]);

    frontEnd(userElement, compElement, message);
}

// Defining the function that will make decisions
function computeElements(userElement, compElement)
{
    /*
    0 => Rock
    1 => Paper
    2 => Scissors
    */
    
    const database = 
    {
        0: {1: 1, 0: 0.5, 2: 0},
        1: {2: 1, 1: 0.5, 0: 0},
        2: {0: 1, 2: 0.5, 1: 0}
    }
    let userScore = database[userElement][compElement];
    let compScore = database[compElement][userElement];

    return [userScore, compScore];
}

// Defining the function that will generate the message
function showMessage(userScore)
{
    if(userScore === 0)
    {
        return {"message": "You Lost!", "color": "red"};
    }
    else if(userScore === 1)
    {
        return {"message": "You Won!", "color": "green"};
    }
    else
    {
        return {"message": "Draw!", "color": "yellow"};
    }
}

// Defining the method that will display the UI
function frontEnd(userElement, compElement, message)
{
    const images = ["Images/rock.jpg", "Images/paper.jpg", "Images/scissors.jpg"];

    // Removing all the elements when decision is made
    document.getElementById('0').parentElement.remove();
    document.getElementById('1').parentElement.remove();
    document.getElementById('2').parentElement.remove();

    // Instantiating new elements
    let userDiv = document.createElement('div');
    let compDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    userDiv.className = "img";
    compDiv.className = "img";
    messageDiv.className = "img";
    messageDiv.classList.add('message');

    userDiv.innerHTML = `<img src = "${images[userElement]}">`;
    compDiv.innerHTML = `<img src = "${images[compElement]}">`;
    messageDiv.innerHTML = `<h1 style = "color: ${message.color};"> ${message.message} </h1>`;

    // Appending the new elements
    let mainContainer = document.querySelector('.main');
    mainContainer.appendChild(userDiv);
    mainContainer.appendChild(messageDiv);
    mainContainer.appendChild(compDiv);
}

// Adding an event listener to the refresh button
let refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', (event)=>
{
    location.reload();
});