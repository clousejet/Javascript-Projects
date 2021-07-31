// Declaring variables
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');const characters = ['*', '/', '+', '-', '.'];

// Function that will print the characters based on their functionality
function checkAndPrint(textToPrint)
{
    let lastChar = screen.value.substring(screen.value.length - 1, screen.value.length);
    if(characters.includes(lastChar) || screen.value.length == 0)
    {
        return false;
    }
    else
    {
        text = textToPrint;screen.value += text;
    }
}
// Adding an event listener to every button
for (button of buttons)
{
    button.addEventListener('click', function(event)
    {
        let text = event.target.innerText;
        if(text == '×')
        {
            checkAndPrint("*");
        }
        else if(text == "−")
        {
            checkAndPrint("-");
        }
        else if(text == '÷')
        {
            checkAndPrint("/")
        }
        else if(text == 'C')
        {
            let substring = screen.value.substring(0, screen.value.length - 1);
            screen.value = substring;
        }
        else if(text == "Clear All")
        {
            screen.value = "";
        }
        else if(text == "+")
        {
            checkAndPrint("+");
        }
        else if(text == ".")
        {
            checkAndPrint(".")
        }
        else if(text == "=")
        {
            let expression = screen.value;
            screen.value = eval(expression);
        }
        else
        {
            screen.value += text;
        }
    });
}