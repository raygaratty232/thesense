var toggleMenu = document.querySelector('.toggle-menu');
var close = document.querySelector('.close-btn');
toggleMenu.addEventListener('click',function (e){
    e.preventDefault();
    var dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active')
    close.classList.toggle('active')
});