const APIURL = "https://type.fit/api/quotes";

const quoteBody = document.querySelector('.quote-body');
const quotePerson = document.querySelector('.quote-person');
const newQuoteBtn = document.getElementById('new-quote');

let quoteCount = 0; 
let responseData;

// Function: Fetches a new quote and displays it 
function getNewQuote(){
    quoteBody.innerHTML = responseData[quoteCount].text;

    let author = responseData[quoteCount].author;

    // If the author is null, then author will be anonymous
    if(!author) author = "Anonymous";
    quotePerson.innerHTML = "- " + author;
    
    quoteCount++;
}

// Function: Fetches the quotes from the remote server
async function getQuotes(){
    let response = await fetch(APIURL);
    responseData = await response.json();

    getNewQuote(responseData);
}

// Handling error
getQuotes()
.catch((error) => {
    console.log("Error: " + error);
});

// Adding an event listener to the newQuoteBtn
newQuoteBtn.addEventListener('click', getNewQuote);