var menuClick = document.querySelector('#menu-click');
var menuMobie = document.querySelector('#menu-mobie');
var btnClose = document.querySelector('#btn_close');
var overLay = document.querySelector('#overlay');
menuClick.onclick = function() {
    menuMobie.classList.toggle('show');
    overLay.classList.toggle('hidden');
}
btnClose.onclick = function() {
    menuMobie.classList.toggle('show');
    overLay.classList.toggle('hidden');
}
overLay.onclick = function() {
    menuMobie.classList.toggle('show');
    overLay.classList.toggle('hidden');
}