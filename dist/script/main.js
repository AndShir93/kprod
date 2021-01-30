'use strict'

const navBtn = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav__menu_show')
    navBtn.classList.toggle('nav__burger_show')
})
let widthPage = document.documentElement.clientWidth;
window.addEventListener('resize', ()=>{
    widthPage = document.documentElement.clientWidth;
})
class Line {
    constructor(name,direction, position, speed){
        this.name = name;
        this.direction = direction;
        this.position = position;
        this.speed = speed;
    }
    move(){
        if(this.direction){
            this.name.style.transform = `translate(${this.speed*(this.position++)}px)`;
            this.getDirection();
        }else{
            this.name.style.transform = `translate(${this.speed*(this.position--)}px)`;
            this.getDirection();
        }
    }
    getDirection(){
        if((this.name.getBoundingClientRect().right > widthPage && this.direction) || (this.name.getBoundingClientRect().left < 0 && !this.direction)){
            this.direction = !this.direction
        }
    }
}
const firstLine = new Line(document.querySelector('.line_first'), false, 0, 1)
const secondLine = new Line(document.querySelector('.line_second'), false, 0, 1)
const thirdLine = new Line(document.querySelector('.line_third'), true, 0, 2)
setInterval(()=>{
    firstLine.move()
    secondLine.move()
    thirdLine.move()
}, 100)