const data = 
[
    {
        name: "Atul Kumar",
        age: 15,
        city: "Missamari",
        language: "Javascript",
        framework: "React JS",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Utkarsh Kumar Choudhary",
        age: 15,
        city: "Allahabad",
        language: "Javascript",
        framework: "jQuery",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        name: "Ankush Kumar Singh",
        age: 15,
        city: "Lucknow",
        language: "CSS",
        framework: "Bootstrap",
        image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        name: "Kunal Vaibhav Kurundwadkar",
        age: 15,
        city: "Delhi",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        name: "Rishabh Singh",
        age: 14,
        city: "Bangalore",
        language: "Python",
        framework: "Pandas",
        image: "https://randomuser.me/api/portraits/men/50.jpg"
    }
];

function cvIterator(profiles)
{
    let nextIndex = 0;
    return{
        next: function()
        {
            if(nextIndex < profiles.length)
            {
                return{
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else
            {
                return{
                    done: true
                }
            }
        }
    }
}

const canditates = cvIterator(data);

nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV()
{
    const currentCanditate = canditates.next().value;
    let image = document.querySelector('.image');
    let profile = document.querySelector('.profile');
    if(currentCanditate != undefined)
    {
        image.innerHTML = `<img src = "${currentCanditate.image}"></img>`;
        profile.innerHTML = 
        `
        <ul class = "list-group">
            <li class = "list-group-item">${currentCanditate.name}</li>
            <li class = "list-group-item">${currentCanditate.age} years</li>
            <li class = "list-group-item">Lives in ${currentCanditate.city}</li>
            <li class = "list-group-item">Professional in ${currentCanditate.language}</li>
            <li class = "list-group-item">Master in ${currentCanditate.framework}</li>
        </ul>
        `;
    }
    else
    {
        alert("End of canditates");
        window.location.reload();
    }
}