'use strict'

const navBtn = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav__menu_show')
    navBtn.classList.toggle('nav__burger_show')
})