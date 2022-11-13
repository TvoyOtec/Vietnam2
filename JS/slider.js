let Slide = 1;
let ColorActive = 'rgba(0, 0, 0, 1)';
let ColorUnactive = 'rgba(0, 0, 0, 0.255)';
let ColorActiveBlack = 'white';
let ColorUnactiveBlack = 'rgb(136, 136, 136)';
let slideButncount = 0;
let Slibtnarr = []
let allslides = 7
const Panel = document.querySelector('.SliPanel');
const Slider = document.querySelector('.slider');

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

function Slides() {

    if (Slide > allslides) {
        Slide = 1
    }
    if (Slide < 1) {
        Slide = allslides
    }

    for (let i = 1; i <= allslides; i++) {
        if (Slide == i) {
            if (theme == 1) {
                Slibtnarr[i - 1].style.background = ColorActiveBlack;
            } else {
                Slibtnarr[i - 1].style.background = ColorActive;
            }
        } else {
            if (theme == 1) {
                Slibtnarr[i - 1].style.background = ColorUnactiveBlack;
            } else {
                Slibtnarr[i - 1].style.background = ColorUnactive;
            }
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

for (let f = 1; f <= allslides; f++) {
    Slibtnarr[f - 1].addEventListener('click', function () {
        Slide = f;
        Slides();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.keycode == "39" || e.code == "ArrowRight") {
        Slide++;
        Slides()

    } else if (e.keycode == "37" || e.code == "ArrowLeft") {
        Slide--;
        Slides()
    }
})

setInterval(() => {
    Slide++;
    Slides()
}, 6000);