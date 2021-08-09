const password = document.getElementById('password');
const copyBtn = document.querySelector('.fa-copy');
const passwordLength = document.getElementById('password-length');
const isUpperCase = document.getElementById('uppercase-letters');
const isLowerCase = document.getElementById('lowercase-letters');
const hasNumbers = document.getElementById('numbers');
const hasSymbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generator');
var parameters = [];

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = lowercaseLetters.toUpperCase();
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=|{}[];:"/><,.?';

generateBtn.addEventListener('click', generatePassword);

function getChar(type)
{
    return type[Math.floor(Math.random() * type.length)];
}

function check()
{
    parameters = [];
    if(isUpperCase.checked)
    {
        parameters.push(uppercaseLetters);
    }
    if(isLowerCase.checked)
    {
        parameters.push(lowercaseLetters);
    }
    if(hasNumbers.checked)
    {
        parameters.push(numbers);
    }
    if(hasSymbols.checked)
    {
        parameters.push(symbols);
    }
}

function generatePassword()
{
    let randomPassword = '';

    check();

    if(parseInt(passwordLength.value) > 1000)
    {
        passwordLength.value = 1000;
    }

    for(let i = 0; i < parseInt(passwordLength.value); i++)
    {
        randomPassword += getChar(parameters[Math.floor(Math.random() * parameters.length)]);        
    }

    password.value = randomPassword;
}

copyBtn.addEventListener('click', copy);

function copy()
{
    const textarea = document.createElement('textarea');
    const passwordValue = password.value;

    if(!passwordValue)
    {
        return false;
    }
    else
    {
        textarea.value = passwordValue;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert("Password has been copied to the clipboard!")
    }
}