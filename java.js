let bars = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

bars.onclick = function(){
bars.classList.toggle('bx-x');
navbar.classList.toggle('open');

};