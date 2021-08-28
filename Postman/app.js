const parametersBox = document.getElementById('parametersBox');
const requestJsonBox = document.getElementById('requestJsonBox');
const responseJsonBox = document.getElementById('responseJsonBox');
const jsonRadio = document.getElementById('jsonRadio');
const paramsRadio = document.getElementById('paramsRadio');
const getRadio = document.getElementById('get');
const postRadio = document.getElementById('post');
const addParamBtn = document.getElementById('addParam');
const params = document.getElementById('params');
const submitBtn = document.getElementById('submit');
const postBox = document.getElementById('postBox');

parametersBox.style.display = "none";
postBox.style.display = "none";
requestJsonBox.style.display = "none";

getRadio.addEventListener('click', function()
{
    postBox.style.display = "none";
    requestJsonBox.style.display = "none";  
});

postRadio.addEventListener('click', function()
{
    postBox.style.display = "block";
    requestJsonBox.style.display = "block";
});

jsonRadio.addEventListener('click', function()
{
    parametersBox.style.display = "none";
    requestJsonBox.style.display = "block";
});

paramsRadio.addEventListener('click', function()
{
    requestJsonBox.style.display = "none";
    parametersBox.style.display = "block";
});

addParamBtn.addEventListener('click', function()
{
    const paramBoxes = document.querySelectorAll('.param').length;

    let html = `<div class="form-row param">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${paramBoxes + 1}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${paramBoxes + 1}" placeholder="Enter Parameter ${paramBoxes + 1} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${paramBoxes + 1}" placeholder="Enter Parameter ${paramBoxes + 1} Value">
                    </div>
                    <button class="btn btn-primary delete-param">-</button>
                </div>`;

    params.innerHTML += html;                

    addDeleteFunctionality();
    reorderParamBoxes();
});

function addDeleteFunctionality()
{
    let deleteButtons = document.querySelectorAll('.delete-param');
    deleteButtons.forEach(deleteBtn => 
        {
            deleteBtn.addEventListener('click', function(event)
            {
                params.removeChild(event.target.parentElement);
                reorderParamBoxes();
            });
        });
}

function reorderParamBoxes()
{
    let paramsContainer = document.getElementById('params');
    let params = paramsContainer.querySelectorAll('.param');
    params.forEach((param, index) =>
    {
        param.firstElementChild.innerHTML = `Parameter ${index + 2}`;

        param.firstElementChild.nextElementSibling.firstElementChild.id = `parameterKey${index + 2}`;
        param.firstElementChild.nextElementSibling.firstElementChild.placeholder = `Enter Parameter ${index + 2} Key`;

        param.lastElementChild.previousElementSibling.firstElementChild.id = `parameterValue${index + 2}`;
        param.lastElementChild.previousElementSibling.firstElementChild.placeholder = `Enter Parameter ${index + 2} Value`;   
    });
}

submitBtn.addEventListener('click', function()
{
    responseJsonBox.querySelector('textarea').value = "Please wait...";

    let data = {};
    const url = document.getElementById('url').value;
    const requestType = document.querySelector("input[name='requestType']:checked").value;
    const contentType = document.querySelector("input[name='contentType']:checked").value;


    if(contentType === "params")
    {
        for (let i = 0; i <= params.querySelectorAll('.param').length; i++)
        {
            let key = document.getElementById(`parameterKey${i + 1}`).value;
            let value = document.getElementById(`parameterValue${i + 1}`).value;

            data[key] = value;
        }
        data = JSON.stringify(data);
    }
    else
    {
        data = requestJsonBox.value;
    }

    if(requestType === "GET")
    {
        fetch(url)
        .then(response => response.text())
        .then(text => {requestJsonBox.value = text});
    }
    else
    {
        fetch(url, 
            {
                method: "POST",
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.text())
            .then(text => {requestJsonBox.value = text});
    }
});