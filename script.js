let burger = document.getElementsByClassName('burger')[0];
let nav = document.getElementsByClassName('nav')[0];
let navList = document.getElementsByClassName('nav-list')[0];
burger.addEventListener("click", ()=> {
burger.classList.toggle("show-menu")
nav.classList.toggle("show")
navList.classList.toggle("show")
});


