// Words Array
const words = ['HTML', 'CSS', 'Javascript', 'Node', 'Bootstrap', 'jQuery', 'Packet', 'GitHub', 'Linux', 'C++', 'C#', 'MySQL', 'ExpressJS', 'MongoDB', 'Python', 'Django', 'Tensorflow', 'Android', 'Unity', 'Unreal', 'Swift', 'Objective-C', 'Apple', 'Microsoft', 'Google', 'Steve Jobs', 'Bill Gates', 'Wozniak', 'Larry', 'Pagerank', 'Zuckerberg', 'Facebook', 'Assembler', 'Teletype', 'Scikit-Learn', 'Jupyter', 'Linus Torvalds', 'Windows', 'iOS', 'MacOS', 'Processor', 'Gaming', 'Games', 'Software', 'Hacker', 'Kali', 'JSON', 'XML', 'Server', 'Packet', 'Frame', 'Tailwind', 'GameEon', 'Three.js', 'OpenCV', 'x86', 'AMD Ryzen', 'NVIDIA', 'Programming', 'ReactJS', 'Redux', 'React Native', 'Electron JS', 'Angular', 'Vue', 'Ember', 'Svelte', 'Codepen', 'Bit', 'Binary', 'Memory', 'Data', 'RAM', 'TypeScript', 'CLI', 'Desktop', 'Laptop', 'VS Code', 'Open Source', 'Freeware', 'Firmware', 'Shareware', 'Proprietary'];

// Messages Array
const winMessages = ["Yowza! That's correct...", "Superb", "Great Going", "Awesome", "Perfect", "Yeah! Correct...", "You're a boss!"];
const loseMessages = ["Aww... That's incorrect!", "Please try again...", "Go and Study Computer Science and then Guess", "Are you not a programmer? Guess", "Incorrect..."]

const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const startBtn = document.getElementById('start-btn');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const buttonContainer = document.querySelector('.button-container');
const questionContainer = document.querySelector('.question-container');

let newWord = "";
let randomWord = "";

startBtn.addEventListener('click', ShowWord);
nextBtn.addEventListener('click', ShowWord);

checkBtn.addEventListener('click', () => 
{
    let guessedWord = guess.value;
    if(guess.value)
    {
        if(guess.value.toLowerCase() === newWord.toLowerCase())
        {
            win();
        }
        else
        {
            lose();
        }
    }
    guess.value = "";
});

/*  Function:
    Hide the button container
    Show the questions' container
    Generate a new word and display it
*/
function ShowWord()
{
    buttonContainer.style.display = "none";
    questionContainer.style.display = "flex";

    checkBtn.style.display = "block";
    nextBtn.style.display = "none";

    guess.style.display = "block";
    guess.focus();

    newWord = createNewWords();

    randomWord = scrambleWords(newWord.split(""));

    displayQuestion(randomWord);
}

// Function: Picks up a random word from the array and returns it
function createNewWords() {
    let randomNumber = Math.floor(Math.random() * words.length);
    let newWord = words[randomNumber];

    return newWord;
}

// Function: Scrambles the word using an algorithm
function scrambleWords(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let randomIndex = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }

    randomWord = arr.join("");
    return randomWord;
}

// Function: displays the question 
function displayQuestion(randomWord)
{
    msg.innerHTML = `Guess the Word: ${randomWord}`;
}

// Function: UI to display if the player wins
function win()
{
    guess.style.display = "none";

    let randomMessage = winMessages[Math.floor(Math.random() * winMessages.length)];
    msg.innerHTML = randomMessage;

    checkBtn.style.display = "none";
    nextBtn.style.display = "block";
}

// Function: UI to display if the player loses
function lose()
{
    guess.focus();
    let randomMessage = loseMessages[Math.floor(Math.random() * loseMessages.length)];
    msg.innerHTML = `${randomMessage} : ${randomWord}`;
}
