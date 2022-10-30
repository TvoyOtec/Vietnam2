let Slide = 1;
let ColorActive = 'rgba(0, 0, 0, 1)';
let ColorUnactive = 'rgba(0, 0, 0, 0.255)';
let ColorActiveBlack = 'white';
let ColorUnactiveBlack = 'rgb(136, 136, 136)';
const Panel = document.querySelector('.SliPanel');
const Slider = document.querySelector('.slider');
const But1 = document.querySelector('#SliCirc1');
const But2 = document.querySelector('#SliCirc2');
const But3 = document.querySelector('#SliCirc3');
const But4 = document.querySelector('#SliCirc4');
const But5 = document.querySelector('#SliCirc5');

function Slides() {
    if (Slide == 1) {
        Slider.style.backgroundImage = 'url(IMAGE/Shreks.jpg)';
        if (theme == 1) {
            But1.style.background = ColorActiveBlack;
        } else {
            But1.style.background = ColorActive;
        }
    } else {
        if (theme == 1) {
            But1.style.background = ColorUnactiveBlack;
        } else {
            But1.style.background = ColorUnactive;
        }
    };
    if (Slide == 2) {
        Slider.style.backgroundImage = 'url(IMAGE/KoshkaJena.jpg)';
        if (theme == 1) {
            But2.style.background = ColorActiveBlack;
        } else {
            But2.style.background = ColorActive;
        }
    } else {
        if (theme == 1) {
            But2.style.background = ColorUnactiveBlack;
        } else {
            But2.style.background = ColorUnactive;
        }
    };
    if (Slide == 3) {
        Slider.style.backgroundImage = 'url(IMAGE/hitler.jpg)';
        if (theme == 1) {
            But3.style.background = ColorActiveBlack;
        } else {
            But3.style.background = ColorActive;

        }
    } else {
        if (theme == 1) {
            But3.style.background = ColorUnactiveBlack;
        } else {
            But3.style.background = ColorUnactive;
        }
    };
    if (Slide == 4) {
        Slider.style.backgroundImage = 'url(IMAGE/Ukrain.jpg)';
        if (theme == 1) {
            But4.style.background = ColorActiveBlack;
        } else {
            But4.style.background = ColorActive;

        }
    } else {
        if (theme == 1) {
            But4.style.background = ColorUnactiveBlack;
        } else {
            But4.style.background = ColorUnactive;
        }
    };
    if (Slide == 5) {
        Slider.style.backgroundImage = 'url(IMAGE/Armenia.jpg)';
        if (theme == 1) {
            But5.style.background = ColorActiveBlack;
        } else {
            But5.style.background = ColorActive;

        }
    } else {
        if (theme == 1) {
            But5.style.background = ColorUnactiveBlack;
        } else {
            But5.style.background = ColorUnactive;
        }
    };
};

Slides();

But1.addEventListener('click', function () {
    Slide = 1;
    Slides();
});
But2.addEventListener('click', function () {
    Slide = 2;
    Slides();
});
But3.addEventListener('click', function () {
    Slide = 3;
    Slides();
});
But4.addEventListener('click', function () {
    Slide = 4;
    Slides();
});
But5.addEventListener('click', function () {
    Slide = 5;
    Slides();
});

setInterval(() => {
    Slides(Slide);
    Slide++;
    if (Slide > 4) {
        Slide = 1
    }
}, 6000);