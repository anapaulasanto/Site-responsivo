var iconBar = document.querySelector('nav .menu-icon');
var menuBar = document.querySelector('nav ul');

iconBar.addEventListener("click",function(e) {
    menuBar.classList.toggle('hide');
});