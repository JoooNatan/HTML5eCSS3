var menu = document.querySelector('#imenu');
var btn_menu = document.querySelector('#menu-btn');

btn_menu.addEventListener('click', function(){
    console.log('botao Menu clicado');
    menu.classList.toggle('active');
    document.querySelector('#menu-icon').classList.toggle('active');
});