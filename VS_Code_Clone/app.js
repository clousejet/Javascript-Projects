'use strict';

const codeArea = document.querySelector('.code');
const lineCountArea = document.querySelector('.line-counter');

function eventHandler()
{
    let textareasCount = codeArea.querySelectorAll('textarea').length;

    if(event.code === "Enter")
    {
        event.preventDefault();
        let textAreas = codeArea.querySelectorAll('textarea');
        let textareaLength = textAreas.length;
        
        let lineTextarea = document.createElement('textarea');
        let textarea = document.createElement('textarea');
        lineTextarea.setAttribute('data-id', textareaLength + 1);
        textarea.setAttribute('data-id', textareaLength + 1);
        textarea.setAttribute('onkeydown', "eventHandler()");
        
        lineTextarea.rows = 1;
        textarea.rows = 1;
        
        lineTextarea.textContent = textareaLength + 1;
        lineCountArea.appendChild(lineTextarea);
        
        if(event.target.getAttribute('data-id') == textareasCount)
        {
            codeArea.appendChild(textarea);
            event.target.nextElementSibling.focus();

            for(let i = 0; i < lineCountArea.querySelectorAll('textarea').length; i++)
            {
                lineCountArea.querySelectorAll('textarea')[i].removeAttribute('data-id');
                codeArea.querySelectorAll('textarea')[i].removeAttribute('data-id');
                lineCountArea.querySelectorAll('textarea')[i].setAttribute('data-id', i+1);
                lineCountArea.querySelectorAll('textarea')[i].value = lineCountArea.querySelectorAll('textarea')[i].getAttribute('data-id');
                codeArea.querySelectorAll('textarea')[i].setAttribute('data-id', i+1);
            }
        }
        else
        {
            let nextElement = event.target.nextElementSibling;
            codeArea.insertBefore(textarea, nextElement);
            nextElement.previousElementSibling.focus();

            for(let i = 0; i < lineCountArea.querySelectorAll('textarea').length; i++)
            {
                lineCountArea.querySelectorAll('textarea')[i].removeAttribute('data-id');
                codeArea.querySelectorAll('textarea')[i].removeAttribute('data-id');
                lineCountArea.querySelectorAll('textarea')[i].setAttribute('data-id', i+1);
                lineCountArea.querySelectorAll('textarea')[i].value = lineCountArea.querySelectorAll('textarea')[i].getAttribute('data-id');
                codeArea.querySelectorAll('textarea')[i].setAttribute('data-id', i+1);
            }
        }
    }
    else if(event.keyCode === 8 && event.target.value.length === 0 && event.target.getAttribute('data-id') > 1)
    {
        event.target.previousElementSibling.focus();
        codeArea.removeChild(event.target);
        let id = event.target.getAttribute('data-id');
        let lineCount = lineCountArea.querySelector(`[data-id='${id}']`);
        lineCountArea.removeChild(lineCount);

        for(let i = 0; i < lineCountArea.querySelectorAll('textarea').length; i++)
        {
            lineCountArea.querySelectorAll('textarea')[i].removeAttribute('data-id');
            codeArea.querySelectorAll('textarea')[i].removeAttribute('data-id');
            lineCountArea.querySelectorAll('textarea')[i].setAttribute('data-id', i+1);
            lineCountArea.querySelectorAll('textarea')[i].value = lineCountArea.querySelectorAll('textarea')[i].getAttribute('data-id');
            codeArea.querySelectorAll('textarea')[i].setAttribute('data-id', i+1);
        }
    }
    else if(event.keyCode === 9)
    {
        event.preventDefault();
        event.target.value += "    ";
    }
    else if(event.keyCode === 38 && event.target.getAttribute('data-id') > 1)
    {
        event.target.previousElementSibling.focus();
    }
    else if (event.keyCode === 40)
    {
        let textAreas = codeArea.querySelectorAll('textarea');
        let textareaLength = textAreas.length;

        if(event.target.getAttribute('data-id') < textareaLength)
        {
            event.target.nextElementSibling.focus();
        }
    }
}