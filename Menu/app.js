const menu = 
[
    {
        id: 1,
        title: "Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://source.unsplash.com/1600x900/?pancakes",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 2,
        title: "Panner",
        category: "lunch",
        price: 9.99,
        img: "https://source.unsplash.com/1600x900/?panner",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 3,
        title: "Coldrink",
        category: "shakes",
        price: 15.99,
        img: "https://source.unsplash.com/1600x900/?coldrink",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 4,
        title: "Cake",
        category: "breakfast",
        price: 19.99,
        img: "https://source.unsplash.com/1600x900/?cake",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 5,
        title: "Juice",
        category: "shakes",
        price: 15.99,
        img: "https://source.unsplash.com/1600x900/?juice",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 6,
        title: "Burger",
        category: "breakfast",
        price: 15.99,
        img: "https://source.unsplash.com/1600x900/?burger",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 7,
        title: "Pizza",
        category: "lunch",
        price: 7.99,
        img: "https://source.unsplash.com/1600x900/?pizza",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 8,
        title: "Chowmein",
        category: "lunch",
        price: 1.99,
        img: "https://source.unsplash.com/1600x900/?chowmein",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    },
    {
        id: 9,
        title: "Omelette",
        category: "breakfast",
        price: 3.99,
        img: "https://source.unsplash.com/1600x900/?omelette",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid at. Numquam incidunt, amet vitae"  
    }
];

const container = document.querySelector('.container');
const filterBtns = document.querySelectorAll('.tab');

window.addEventListener('DOMContentLoaded', displayMenuItems(menu));

filterBtns.forEach(function(element)
{
    element.addEventListener('click', function()
    {
        const category = element.getAttribute('data-id');
        const menuCategory = menu.filter(function(menuItem)
        {
            if(menuItem.category === category)
            {
                return menuItem;
                console.log("Match");
            }
        });
        if(category === "all")
        {
            displayMenuItems(menu);
        }
        else
        {
            displayMenuItems(menuCategory);
        }
    });
});


function displayMenuItems(menuItem)
{
    let displayMenu = menuItem.map(function(item)
    {
        return `<div class="item">
                    <div class="img">
                        <img src="${item.img}" alt="food_img">
                    </div>
                    <div class="info">
                        <div class="main-info"><span class = "name">${item.title}</span><span class = "price">${item.price}</span></div>
                        <hr>
                        <div class="description">
                            ${item.desc}
                        </div>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    container.innerHTML = displayMenu;
}