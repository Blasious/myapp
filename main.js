const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');

const pages = document.querySelectorAll('.page');


//init menu
let showMenu = false;
let prev = 0;

menuBtn.addEventListener('click',toggleMenu);
navLinks.forEach(function(link,index){
    link.addEventListener('click',function(){
        toggleMenu();

        //change link to yellow
        navLinks.forEach(link => link.classList.remove('text-yellow'));
        navLinks[index].classList.add("text-yellow");

        //go to the selected page
        pages[prev].classList.remove('show');
        pages[index].classList.add('show');
        prev = index;
    });
});

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu show
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu not to show
        showMenu = false;
    }
}