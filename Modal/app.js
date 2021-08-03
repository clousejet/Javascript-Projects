const modalBtn = document.getElementById('modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.getElementById('close-btn');

modalBtn.addEventListener('click', ()=>
{
    modal.style.display = "flex";
}); 

closeBtn.addEventListener('click', ()=>
{
    modal.style.display = "none";
})