// Declaring and initializing variables
let btns = document.getElementsByClassName('btn');
let realColor = [];

// Creating a copy of the real colors
for (let i = 0; i < btns.length; i++)
{
    realColor.push(btns[i].classList[1]);
}

// Creating a function to change the button color based on user input
function changeBtnColor(color)
{
    if(color.value === "red")
    {
        btnsRed();
    }
    else if(color.value === "green")
    {
        btnsGreen();
    }
    else if(color.value === "reset")
    {
        reset();
    }
    else if(color.value === "random")
    {
        random();
    }
}

// A function to change the buttons to red
function btnsRed()
{
    for(let i = 0; i < realColor.length; i++)
    {
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add("btn-danger");       
    }
}

// A function to change the buttons to green
function btnsGreen()
{
    for(let i = 0; i < realColor.length; i++)
    {
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add("btn-success");       
    }
}

// Defining the function that will reset the colors
function reset()
{
    for(let i = 0; i < realColor.length; i++)
    {
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add(realColor[i]); 
    }
}

// Defining the function that will randomly pick a color for all the buttons
function random()
{
    let randomColors = ['btn-primary', 'btn-danger', 'btn-success'];
    for(let i = 0; i < realColor.length; i++)
    {
        btns[i].classList.remove(btns[i].classList[1]);
        let randomColor = Math.floor(Math.random() * 3);
        btns[i].classList.add(randomColors[randomColor]);
    }
}