'use strict';

const quizData = 
[
    {
        question: "Which Javascript Engine does Chrome uses?",
        a: "Nitro",
        b: "V8",
        c: "SpiderMonkey",
        d: "Chakra",
        correct: 'b'
    },
    {
        question: "What is the best programming language according to Bill Gates?",
        a: "Python",
        b: "C",
        c: "C++",
        d: "Javascript",
        correct: 'a'
    },
    {
        question: "What is the most trending programming language?",
        a: "Java",
        b: "TypeScript",
        c: "Python",
        d: "PHP",
        correct: 'c'
    },
    {
        question: "Who is the CEO of CleverProgrammer?",
        a: "Rafeh Qazi",
        b: "Naz",
        c: "Sonny Sangha",
        d: "Atul Kumar",
        correct: 'a'
    },
    {
        question: "What is the name of the processor made by India?",
        a: "Bhakti",
        b: "Hind",
        c: "TechInd",
        d: "Shakti",
        correct: 'd'
    },
    {
        question: "Full form of HTML",
        a: "HyperText Made Language",
        b: "HyperText Markup Language",
        c: "HyperCasual Terrific Language",
        d: "None of these",
        correct: 'b'
    },
    {
        question: "What are the employees of Supercell called?",
        a: "Supercellians",
        b: "Supercellers",
        c: "Supergamers",
        d: "SupercellDarkers",
        correct: "a"
    }
];

const alphabets = ['a', 'b', 'c', 'd'];
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('label');
const submitBtn = document.getElementById('submit');
const answers = document.querySelectorAll('input');
const container = document.querySelector('.container');

let currentQuiz = 0;
let score = 0;
let answer;
let answerHasBeenSelected = false;

loadQuiz();

function loadQuiz()
{
    const currentQuizData = quizData[currentQuiz];
    questionElement.textContent = currentQuizData.question;

    options.forEach(function(option, index)
    {
        let optionNumber = alphabets[index];
        option.innerText = currentQuizData[optionNumber];
    });
}

function replay()
{
    location.reload();
}

function validateResponse()
{
    for (answer of answers)
    {
        if(answer.checked)
        {
            let answerValue = answer.id;
            if(answerValue === quizData[currentQuiz].correct)
            {
                score++;
            }
            answerHasBeenSelected = true;
            break;
        }
        else
        {
            answerHasBeenSelected = false;
        }
    }
}

submitBtn.addEventListener('click', function()
{
    validateResponse();

    if(!answerHasBeenSelected)
    {
        alert("Please choose an option!");
    }
    else
    {
        currentQuiz++;
    
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
            container.innerHTML = `<h1 id = "scoreText"> Your Score: ${score}/${quizData.length} </h1>
                                    <meter min = "0" max = "100" value = "${(score * 100)/quizData.length}"></meter>
                                    <button type = "button" id = "replay" onclick = "replay()">Replay</button>`;
        }
    }
});