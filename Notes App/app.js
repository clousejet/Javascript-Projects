// Fetching the notes on page load
fetchNotes();

let addBtn = document.getElementById('add-btn');

// Adding an event listener to 'Add' Button
addBtn.addEventListener('click', function(event)
{
    let note = document.getElementById('note');
    let title = document.getElementById('title');
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');

    if(notes == null && titles == null)
    {
        notesArr = [];
        titlesArr = [];
    }
    else
    {
        notesArr = JSON.parse(notes);
        titlesArr = JSON.parse(titles);
    }
    if(note.value != "" && title.value != "")
    {
        let stateWrapper = document.querySelector('.state-wrapper');
        stateWrapper.innerHTML = `  <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Success!</strong> Note added successfully! 	&#128512;
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    `;

        note.value = note.value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        title.value = title.value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        notesArr.push(note.value);
        titlesArr.push(title.value);
        
        note.value = "";
        title.value = "";                            

        localStorage.setItem('notes', JSON.stringify(notesArr));
        localStorage.setItem('titles', JSON.stringify(titlesArr));

        fetchNotes();
    }
    else
    {
        let stateWrapper = document.querySelector('.state-wrapper');
        stateWrapper.innerHTML = `  <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Failure!</strong> Please write a complete note and then click on <u>Add Note</u> &#128544;
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    `;
    }
});

// Defining the function to fetch the notes from local storage
function fetchNotes()
{
    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');

    if(notes == null && titles == null)
    {
        notesArr = [];
        titlesArr = [];
    }
    else
    {
        notesArr = JSON.parse(notes);
        titlesArr = JSON.parse(titles);
    }

    let html = "";

    for(let i = 0; i < notesArr.length; i++)
    {
        let title = titlesArr[i];
        let description = notesArr[i];

        html += `<div class = "card">
                    <div class = "card-body">
                        <h5 class = "card-title">${title}</h5>
                        <p class = "card-text">${description}</p>
                        <button id = "${i}" class = "btn btn-danger" onclick = "deleteNote(this.id)">Delete</button>
                    </div>
                </div>
                `;
    }

    let container = document.querySelector('.note-container');
    if(notesArr.length > 0)
    {
        container.innerHTML = html;
    }
    else
    {
        let html = `<div class="container-fluid alert alert-primary" role="alert">
                        <h4 class="alert-heading"> No Notes Yet!</h4>
                        <p>Aww it seems like you have not added any note yet...</p>
                        <hr>
                        <p class="mb-0">Please go the <strong> Add Notes </strong> section and add a note and your notes will show up here... &#128526;</p>
                    </div>
                    `;
        container.innerHTML = html;
    }
}

// Defining the function to delete a note from the local storage
function deleteNote(index)
{
    let stateWrapper = document.querySelector('.state-wrapper');
    stateWrapper.innerHTML = `  <div class="alert alert-primary alert-dismissible fade show" role="alert">
                                    <strong>Success!</strong> Note Deleted Successfully! &#128532;	
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;

    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    notesArr = JSON.parse(notes);
    titlesArr = JSON.parse(titles);
    notesArr.splice(index, 1);
    titlesArr.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notesArr));
    localStorage.setItem('titles', JSON.stringify(titlesArr));

    fetchNotes();
}

// Making an algorithm to search notes
let search = document.getElementById('search');
search.addEventListener('input', function(event)
{
    let searchVal = search.value.toLowerCase();
    let notes = document.querySelectorAll('.card');
    notes.forEach(function(element)
    {
        let note = element.querySelector('.card-title').innerText.toLowerCase();
        if(note.includes(searchVal))
        {
            noResults = false;
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });
});