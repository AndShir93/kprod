'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navBtn = document.querySelector('.nav__burger');
var navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', function () {
    navMenu.classList.toggle('nav__menu_show');
    navBtn.classList.toggle('nav__burger_show');
});
var widthPage = document.documentElement.clientWidth;
window.addEventListener('resize', function () {
    widthPage = document.documentElement.clientWidth;
});

var Line = function () {
    function Line(name, direction, position, speed) {
        _classCallCheck(this, Line);

        this.name = name;
        this.direction = direction;
        this.position = position;
        this.speed = speed;
    }

    _createClass(Line, [{
        key: 'move',
        value: function move() {
            if (this.direction) {
                this.name.style.transform = 'translate(' + this.speed * this.position++ + 'px)';
                this.getDirection();
            } else {
                this.name.style.transform = 'translate(' + this.speed * this.position-- + 'px)';
                this.getDirection();
            }
        }
    }, {
        key: 'getDirection',
        value: function getDirection() {
            if (this.name.getBoundingClientRect().right > widthPage && this.direction || this.name.getBoundingClientRect().left < 0 && !this.direction) {
                this.direction = !this.direction;
            }
        }
    }]);

    return Line;
}();

var firstLine = new Line(document.querySelector('.line_first'), false, 0, 1);
var secondLine = new Line(document.querySelector('.line_second'), false, 0, 1);
var thirdLine = new Line(document.querySelector('.line_third'), true, 0, 2);
setInterval(function () {
    firstLine.move();
    secondLine.move();
    thirdLine.move();
}, 100);