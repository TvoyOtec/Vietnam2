let Slide = 1,
    ColorActive = 'rgba(0, 0, 0, 1)',
    ColorUnactive = 'rgba(0, 0, 0, 0.255)',
    ColorActiveBlack = 'white',
    ColorUnactiveBlack = 'rgb(136, 136, 136)',
    slideButncount = 0,
    Slibtnarr = [],
    allslides = 7,
    TouchX,
    TouchX2,
    MouseX,
    MouseX2
const Panel = document.querySelector('.SliPanel'),
    Slider = document.querySelector('.slider');

// create buttons under slider
function CreateSlideBtn() {
    while (slideButncount <= (allslides - 1)) {
        let slibtn = document.createElement('span')
        slibtn.className = 'SliCirc'
        slibtn.id = `SliCirc${slideButncount + 1}`
        Panel.append(slibtn)
        Slibtnarr[slideButncount] = document.querySelector(`#SliCirc${slideButncount + 1}`)
        slideButncount++
    }
}

CreateSlideBtn()


//main
function Slides() {
    if (Slide > allslides) {
        Slide = 1
    }
    if (Slide < 1) {
        Slide = allslides
    }

    for (let i = 1; i <= allslides; i++) {
        if (Slide == i) {
            theme == 1 ?
                Slibtnarr[i - 1].style.background = ColorActiveBlack
                :
                Slibtnarr[i - 1].style.background = ColorActive
        } else {
            theme == 1 ?
                Slibtnarr[i - 1].style.background = ColorUnactiveBlack
                :
                Slibtnarr[i - 1].style.background = ColorUnactive
        }
    }

    if (Slide == 1) {
        Slider.style.backgroundImage = 'url(IMAGE/Shreks.jpg)';
    }
    if (Slide == 2) {
        Slider.style.backgroundImage = 'url(IMAGE/KoshkaJena.jpg)';
    }
    if (Slide == 3) {
        Slider.style.backgroundImage = 'url(IMAGE/hitler.jpg)';
    }
    if (Slide == 4) {
        Slider.style.backgroundImage = 'url(IMAGE/Ukrain.jpg)';
    };
    if (Slide == 5) {
        Slider.style.backgroundImage = 'url(IMAGE/Armenia.jpg)';
    };
    if (Slide == 6) {
        Slider.style.backgroundImage = 'url(IMAGE/Папич.jpg)';
    };
    if (Slide == 7) {
        Slider.style.backgroundImage = 'url(IMAGE/viktor-korneplod.jpg)';
    };

};

Slides();


// button click change slide image
for (let f = 1; f <= allslides; f++) {
    Slibtnarr[f - 1].addEventListener('click', function () {
        Slide = f;
        Slides();
    });
}


// arrow change slide
document.addEventListener('keydown', (e) => {
    if (e.keycode == 39 || e.code == "ArrowRight") {
        Slide++;
        Slides()

    } else if (e.keycode == 37 || e.code == "ArrowLeft") {
        Slide--;
        Slides()
    }
})


// mobile swipe
Slider.addEventListener('touchstart', (e) => TouchX = e.touches[0].clientX)
Slider.addEventListener('touchmove', (e) => TouchX2 = TouchX - e.touches[0].clientX > 0 ? Slide + 1 : Slide - 1)
Slider.addEventListener('touchend', () => {
    if (!TouchX || 0 === TouchX.length) return;
    Slide = TouchX2
    Slides()
})


// pc swipe
Slider.addEventListener('mousedown', (e) => MouseX = e.clientX)
Slider.addEventListener('mousemove', (e) => MouseX2 = MouseX - e.clientX > 0 ? Slide + 1 : Slide - 1)
Slider.addEventListener('mouseup', () => {
    if (!MouseX || 0 === MouseX.length) return;
    Slide = MouseX2
    Slides()
})

// auto change slide image
setInterval(() => {
    Slide++;
    Slides()
}, 7000);