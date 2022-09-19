let Slide = 1;
let ColorActive = 'rgba(0, 0, 0, 1)';
let ColorUnactive = 'rgba(0, 0, 0, 0.255)';
const Panel = document.querySelector('.SliPanel');
const Slider = document.querySelector('.slider');
const But1 = document.querySelector('#SliCirc1');
const But2 = document.querySelector('#SliCirc2');
const But3 = document.querySelector('#SliCirc3');
const But4 = document.querySelector('#SliCirc4');
const But5 = document.querySelector('#SliCirc5');
function Slides(){
    if(Slide == 1){
        Slider.style.backgroundImage = 'url(IMAGE/Shreks.jpg)';
        But1.style.background = ColorActive;
    } else{
        But1.style.background = ColorUnactive;
    };  
    if(Slide == 2){
        Slider.style.backgroundImage = 'url(IMAGE/KoshkaJena.jpg)';
        But2.style.background = ColorActive;
    } else{
        But2.style.background = ColorUnactive;
    };  
    if(Slide == 3){
        Slider.style.backgroundImage = 'url(IMAGE/hitler.jpg)';
        But3.style.background = ColorActive;
    } else{
        But3.style.background = ColorUnactive;
    };  
    if(Slide == 4){
        Slider.style.backgroundImage = 'url(IMAGE/Ukrain.jpg)';
        But4.style.background = ColorActive;
    } else{
        But4 .style.background = ColorUnactive;
    };
    if(Slide == 5){
        Slider.style.backgroundImage = 'url(IMAGE/Armenia.jpg)';
        But5.style.background = ColorActive;
    } else{
        But5 .style.background = ColorUnactive;
    };
};

Slides();

But1.addEventListener('click', function(){
    Slide = 1;
    Slides();
});
But2.addEventListener('click', function(){
    Slide = 2;
    Slides();
});
But3.addEventListener('click', function(){
    Slide = 3;
    Slides();
});
But4.addEventListener('click', function(){
    Slide = 4;
    Slides();
});
But5.addEventListener('click', function(){
    Slide = 5;
    Slides();
});

setInterval(() => {
    Slides(Slide);
    Slide++;
    if(Slide > 4){
        Slide = 1
    }
}, 6000);