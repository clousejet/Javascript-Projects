// Declaring variables
let yearOfBirth = document.getElementById('yearOfBirth');
let today = new Date();
let currentYear = today.getFullYear();
let yearIsValid = false;

// Adding event listeners to validate the input data
yearOfBirth.addEventListener('keydown', checkYear);
yearOfBirth.addEventListener('keyup', checkYear);
yearOfBirth.addEventListener('focus', checkYear);

// Making a function to validate the input data
function checkYear()
{
    if(yearOfBirth.value > 2021 || yearOfBirth.value <= 0 || yearOfBirth.value == "" || yearOfBirth.value == null)
    {
        yearIsValid = false;
        yearOfBirth.style.borderColor = "red";
    }
    else
    {
        if(isNaN(10 * yearOfBirth.value))
        {
            yearIsValid = false;
            yearOfBirth.style.borderColor = "red";
        }
        else
        {
            yearIsValid = true;
            yearOfBirth.style.borderColor = "green";
        }
    }
}

// Adding an event listener to the submit button
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (event)=>
{
    event.preventDefault();
    if(yearIsValid)
    {
        let ageInDays = document.getElementById('ageInDays');
        ageInDays.innerHTML = (currentYear - Number(yearOfBirth.value)) * 365;
    }
    else
    {
        document.getElementById('status-bar').innerHTML = 
        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Failure!</strong> Please enter a valid value!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

        let ageInDays = document.getElementById('ageInDays');
        ageInDays.innerHTML = "Error...";
    }
})