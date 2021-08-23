const btnMobile = document.querySelector('#btn-mobile');
const btnOpen = document.querySelector("#button-mobile-options");
const btnDifferencial = document.querySelector("#button-mobile-differencial");

// Hamburguer menu  settings 
function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active-menu');
}
// Hamburguer menu  settings 


/* beginning of service and differential sections description */
function mobileOption() {
    const open = document.querySelector('#options-mobile-content');
    open.classList.toggle('active-service');
    btnOpen.classList.toggle('open');
}

function openDifferencial() {
    const differencial = document.querySelector('#differencial-mobile-content');
    differencial.classList.toggle('active-differencial');
    btnDifferencial.classList.toggle('open');
}
/* ending of service and differential sections description */


 

btnMobile.addEventListener('click', toggleMenu);
btnOpen.addEventListener('click', mobileOption);
btnDifferencial.addEventListener('click', openDifferencial);



