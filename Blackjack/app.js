'use strict';

// Creating a local database as an object literal
let game = 
{
    "user": {"scoreSpan": "user-score", "div": "user-area", "score": 0},
    "dealer": {"scoreSpan": "dealer-score", "div": "dealer-area", "score": 0},
    "cards": ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
    "standPressed": false,
    "dealPressed": false,
    "turnOver": false
};

// Declaring the player
const user = game['user'];
const dealer = game['dealer'];

// Initializing the audios
const hitAudio = new Audio('Audios/swish.m4a');
const failureAudio = new Audio('Audios/aww.mp3');
const victoryAudio = new Audio('Audios/cash.mp3');

// Adding event listeners to the buttons
const hitBtn = document.getElementById('hit-btn');
hitBtn.addEventListener('click', hit);

const dealBtn = document.getElementById('deal-btn');
dealBtn.addEventListener('click', deal);

const standBtn = document.getElementById('stand-btn');
standBtn.addEventListener('click', dealerPlay);

// Defining a 'hit' function
function hit()
{
    if(!(game['standPressed']))
    {
        let card = randomCard();
        generateCard(card, user);
        addScore(card, user);
    }
}

// Defining a function that will show the card on the board
function generateCard(cardSelected, player)
{   
    if(player['score'] <= 21)
    {
        let card = document.createElement('img');
        card.src = `Images/${cardSelected}.png`;
        document.getElementById(player['div']).appendChild(card);
        hitAudio.play();
    }
}

// Defining a function that will pick a random card from the deck of cards
function randomCard()
{
    let randomCard = Math.floor(Math.random() * game['cards'].length);
    return game['cards'][randomCard];
}

// Function that will increment the score per move
function addScore(cardSelected, player)
{
    if(player['score'] < 21)
    {
        let cardValue;
    
        if(cardSelected == "J" || cardSelected == "K" || cardSelected == "Q")
        {
            cardValue = 10;
        }
        else if(cardSelected == "A")
        {
            cardValue = 1;
        }
        else
        {
            cardValue = cardSelected;
        }
    
        player['score'] += Number(cardValue);
        document.getElementById(player['scoreSpan']).innerText = player['score'];

        if(player['score'] > 21)
        {
            document.getElementById(player['scoreSpan']).innerText = " BUST!";
            document.getElementById(player['scoreSpan']).style.color = "red";
        }
    }
    else 
    {
        return false;
    }
}

// Defining the deal function
function deal()
{
    game['dealPressed'] = true;

    if(game['turnOver'])
    {
        let userCards = document.getElementById('user-area').querySelectorAll('img');
        let dealerCards = document.getElementById('dealer-area').querySelectorAll('img');
    
        userCards.forEach((userCard)=>
        {
            userCard.remove();
        });
    
        dealerCards.forEach((dealerCard)=>
        {
            dealerCard.remove();
        });
        
        user['score'] = 0;
        dealer['score'] = 0;
        
        document.getElementById(user['scoreSpan']).innerText = user['score'];
        document.getElementById(dealer['scoreSpan']).innerText = dealer['score'];
        document.getElementById(user['scoreSpan']).style.color = "white";
        document.getElementById(dealer['scoreSpan']).style.color = "white";
        document.getElementById('decision').innerText = "Let's Play!";
        document.getElementById('decision').style.color = "goldenrod";

        game['standPressed'] = false;
        game['dealPressed'] = false;
        game['turnOver'] = false;
    }

}

// An asynchronous function to play the moves itself until a certain limit is reached
async function dealerPlay()
{
    game['standPressed'] = true;

    while(dealer['score'] < 17)
    {
        let card = randomCard();
        generateCard(card, dealer);
        addScore(card, dealer);
        await wait(750);
    }

    if(game['standPressed'])
    {
        game['turnOver'] = true;
    }

    displayResult(makeDecision());
}

// Function that will make the dealerPlay() function sleep for sometime
function wait(time)
{
    return new Promise(resolve =>
        {
            setTimeout(resolve, time);
        });
}

// An algorithm to decide the winner
function makeDecision()
{
    let winner;
    if(user['score'] <= 21)
    {
        if(user['score'] > dealer['score'] || dealer['score'] > 21)
        {
            winner = "user";
        }
        else if(user['score'] < dealer['score'])
        {
            winner = "dealer";
        }
        else if(user['score'] == dealer['score'])
        {
            winner = "none";
        }
    }
    else if(user['score'] > 21 && dealer['score'] <= 21)
    {
        winner = "dealer";
    }
    else if(user['score'] <= 21 && dealer['score'] > 21)
    {
        winner = "user";
    }
    else
    {
        winner = "none";
    }

    return winner;
}

// Function to display result on the screen
function displayResult(winner)
{   
    let message;
    let messageColor;

    if(winner === "user")
    {
        message = "You Won!";
        messageColor = "green";
        victoryAudio.play();
    }
    else if(winner === "dealer")
    {
        message = "You Lost!";
        messageColor = "red";
        failureAudio.play();
    }
    else
    {
        message = "Draw";
        messageColor = "goldrenrod";
    }

    document.getElementById('decision').innerText = message;
    document.getElementById('decision').style.color = messageColor;
}