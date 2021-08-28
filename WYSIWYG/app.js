'use strict';

const editor = document.querySelector('.editor');
const toolbar = document.querySelector('.toolbar');
const btns = document.querySelectorAll('.btn:not(.has-submenu)');
const contentArea = document.querySelector('.content-area');
const visualView = document.querySelector('.visual-view');
const htmlView = contentArea.querySelector('.html-view');
const modal = document.querySelector('.modal');

for (let i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', function(event)
    {
        let action = this.dataset.action;
        
        switch(action)
        {
            case "code":
                execCodeAction(this, editor);
                break;
            default:
                execDefaultAction(action);    
        }
    });
}

function execDefaultAction(action)
{
    autofocus();
    document.execCommand(action, false);
}

function autofocus()
{
    visualView.focus();
}

function execCodeAction(button, editor)
{
    if(button.classList.contains("active"))
    {
        visualView.innerHTML = htmlView.value;
        htmlView.style.display = "none";
        visualView.style.display = "block";
        button.classList.remove("active");
    }
    else
    {
        htmlView.innerText = visualView.innerHTML;
        htmlView.style.display = "block";
        visualView.style.display = "none";
        button.classList.add("active");
    }
}