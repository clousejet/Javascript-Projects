const notesContainer = document.querySelector('.notes');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () =>
{
    let newNote =  `<div class="note">
                        <div contenteditable class="title">
                            <h4>Title</h4>
                        </div>
                        <div class="description" contenteditable>
                            Description Here...
                        </div>
                        <div class="tools">
                            <i class="fa fa-trash-o" onclick = "deleteNote()"></i>
                            <i class = "fa fa-save" onclick = "saveNote()"></i>
                        </div>
                    </div>`;
    notesContainer.innerHTML += newNote;
    let noteObj = 
    {
        title: notesContainer.lastElementChild.querySelector('.title h4').innerText,
        desc: notesContainer.lastElementChild.querySelector('.description').innerText
    }
    saveNotes(noteObj);
    setEventListener();
});

function deleteNote()
{
    let note = 
    {
        title: event.target.parentElement.parentElement.querySelector('.title h4').innerText,
        desc: event.target.parentElement.parentElement.querySelector('.description').innerText
    }
    let decision = confirm("Are you sure that you want to delete this note?");
    if(decision)
    {
        let notes = localStorage.getItem('notes');
        let notesArr = JSON.parse(notes);
        notesArr.splice(notesArr.indexOf(note), 1);
        localStorage.setItem('notes', JSON.stringify(notesArr));
        location.reload();
    }
}

function setEventListener()
{
    let allNotes = document.querySelector('.note');
    Array.from(allNotes).forEach(function(note)
    {
        let noteObj = 
        {
            title: note.querySelector('.title h4').innerText,
            desc: note.querySelector('.description').innerText
        }
        saveNotes(noteObj);
    });
}

function saveNote()
{
    let note = 
    {
        title: event.target.parentElement.parentElement.querySelector('.title h4').innerText,
        desc: event.target.parentElement.parentElement.querySelector('.description').innerText
    } 

    let notes = localStorage.getItem('notes');
    let notesArr = JSON.parse(notes);
    let index = notesArr.indexOf(note);
    notesArr[index] = note;
    localStorage.setItem('notes', JSON.stringify(notesArr));
}

function saveNotes(note)
{
    let notes = localStorage.getItem('notes');
    let notesArr;
    if(notes === null || notes === [])
    {
        notesArr = [];
    }
    else
    {
        notesArr = JSON.parse(notes);
    }
    notesArr.push(note);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    console.log(JSON.parse(localStorage.getItem('notes')).length);
}

function fetchNotes()
{
    notes = localStorage.getItem('notes');
    let notesArr;
    if(notes === null || notes === [])
    {
        notesArr = [];
    }
    else
    {
        notesArr = JSON.parse(notes);
    }

    notesArr.forEach(note =>
        {   
            let html = `<div class="note">
                                    <div contenteditable class="title">
                                        <h4>${note.title}</h4>
                                    </div>
                                    <div class="description" contenteditable>
                                        ${note.desc}
                                    </div>
                                    <div class="tools">
                                        <i class="fa fa-trash-o" onclick = "deleteNote(this)"></i>
                                        <i class = "fa fa-save" onclick = "saveNote()"></i>
                                    </div>
                                </div>`;
            notesContainer.innerHTML += html;
        });
}

fetchNotes();