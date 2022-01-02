//let burger = document.getElementsByClassName('burger')[0];
//let nav = document.getElementsByClassName('nav')[0];
////let navList = document.getElementsByClassName('nav-list')[0];
//burger.addEventListener("click", ()=> {
//burger.classList.toggle("show-menu")
//nav.classList.toggle("show")
//navList.classList.toggle("show")
//});

//$('burger').on('click', ()=> {
   //$('.burger').toogleClass('show-menu') 
   //$('.nav').toogleClass('show') 
   //$('.nav-list').toogleClass('show') 
//});

$(document).ready(function() {
 $('.burger').click(function(){
    $('.burger,.nav,.nav-list').toggleClass('active')
    $('body').toggleClass('lock')
});
});

$('.nav-list').click(function(event){
    $('.burger,.nav,.nav-list').removeClass('active')
    $('body').removeClass('lock')
});

//let burger = document.querySelector('.burger');
//let nav = document.querySelector('.nav');
//let navList = document.querySelector('.nav-list');
//let back = document.querySelector('body');

//burger.onclick=function(){
//    burger.classList.toggle('active')
//    nav.classList.toggle('active')
//    navList.classList.toggle('active')
//    back.classList.toggle('lock')
//};

//navList.onclick=function(){
//    navList.classList.remove('active')
//    back.classList.toggle('lock')
//};

//const nav = document.querySelector('.nav');
//const navList = document.querySelector('.nav-list');
//const navItem = document.querySelector('.nav-item');

//function switchMenu(){
//    burger.classList.toggle('active');
//    nav.classList.toggle('active');
//    navList.classList.toggle('active');
//}
//burger.addEventListener('click', switchMenu);

//function closehMenu() {
//    setTimeout(() => {
//        burger.classList.remove('active');
//        nav.classList.remove('active');
//        navList.classList.remove('active');

//    }, 1000);
//}
