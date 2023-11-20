var iconBar = document.querySelector('.menu-icon');
var menuBar = document.querySelector('.text-bar');

iconBar.addEventListener('click',function(){
    menuBar.classList.toggle('hide');
});