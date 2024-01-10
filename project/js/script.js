let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};

 var posts=[];
async function displaySalad() {

    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
     posts = await response.json();
    console.log(posts);
   
}

async function displaySteak() {
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=steak');
     posts = await response.json();
    console.log(posts);   
}


async function displayFries() {
    var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=fries');
     posts = await response.json();
    console.log(posts);   
}



var meals = '';

async function displayd() {

    for(var i = 0 ; i<posts.recipes.length; i++){
console.log('ooo');

meals+=`<div class="box">

<div class="image">
    <img src="${posts.recipes[i].image_url}" alt="">
    
</div>


<div class="content">
    <div class="price">  <span class="food">${posts.recipes[i].title}</span></div>

    <div class="box-buttons">
    <a  href="${posts.recipes[i].source_url}" class="btn" target="_blank">Explore </a>
    <a  href="crud.html?title=${posts.recipes[i].title}&imgurl=${posts.recipes[i].image_url}&srcurl=${posts.recipes[i].source_url}" class="btn menu"><i  class="bi bi-cart"></i></a>
</div>
</div>


</div>`
    }

    document.getElementById('foodcont').innerHTML+=meals;

}

async function displayAll() {
    await displaySalad();
    await displayd();
    await displaySteak();
    await displayd();
    await displayFries();
    displayd();
    
}

displayAll();