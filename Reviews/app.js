const reviews = 
[
    {
        id: 1,
        name: "Bill Gates",
        job: "Software Developer",
        img: "Images/bill.jpg",
        text: "Bill Gates Sr. William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen. ... Gates was born and raised in Seattle, Washington."
    },
    {
        id: 2,
        name: "Steve Jobs",
        job: "Product Designer",
        img: "Images/steve.jpg",
        text: "Bill Gates Sr. William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen. ... Gates was born and raised in Seattle, Washington."
    },
    {
        id: 3,
        name: "Linus Torvalds",
        job: "Programmer",
        img: "Images/linus.jpg",
        text: "Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and, historically, the main developer of the Linux kernel, used by Linux distributions and other operating systems such as Android."
    },
    {
        id: 4,
        name: "Steve Wozniak",
        job: "PCB Programmer",
        img: "Images/woz.jpg",
        text: "Steve Wozniak, byname of Stephen Gary Wozniak, (born August 11, 1950, San Jose, California, U.S.), American electronics engineer, cofounder, with Steve Jobs, of Apple Computer, and designer of the first commercially successful personal computer. Founder: Apple Inc. ... Courtesy of Apple Computer, Inc."
    },
    {
        id: 5,
        name: "Mark Zuckerberg",
        job: "Full Stack Developer",
        img: "Images/mark.jpg",
        text: "Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; bornMay 14, 1984) is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. ... Zuckerberg took the company public in May 2012 with majority shares. In 2007, at age 23, he became the world's youngest self-made billionaire."
    }
];

const img = document.querySelector('img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const review = document.querySelector('.review');

const prevBtn = document.getElementById('left-btn');
const nextBtn = document.getElementById('right-btn');
const surpriseBtn = document.getElementById('surprise-btn');

let currentItem = 0;

function showPerson(currentItem)
{
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    review.textContent = item.text;
}

nextBtn.addEventListener('click', function()
{
    if(currentItem !== reviews.length-1)
    {
        currentItem++;
        showPerson(currentItem);    
    }
    else
    {
        currentItem = 0;
        showPerson(currentItem);
    }
});

prevBtn.addEventListener('click', function()
{
    if(currentItem > 0)
    {
        currentItem--;
        showPerson(currentItem);
    }
    else
    {
        currentItem = reviews.length - 1;
        showPerson(currentItem);
    }
});

window.addEventListener('DOMContentLoaded', showPerson(currentItem))