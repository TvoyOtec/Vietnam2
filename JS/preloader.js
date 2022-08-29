const preloader = document.querySelector('.preloader');
const circle = document.querySelector('.proBarCircle');
const radius = circle.r.baseVal.value;
const dlina = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${dlina} ${dlina}`;
circle.style.strokeDashoffset = dlina;

function progress(percent) {
    const offset = dlina - percent / 100 * dlina;
    circle.style.strokeDashoffset = offset;
}

let s = 0

var id = setInterval(frame, 1);

function frame() {
    if (s == 100) {
        clearInterval(id);
    } else {
        s++;
        progress(s)
    }
}

window.onload = setTimeout(function loaderCloseAnim() {
    preloader.style.animation = 'preloader 0.5s linear';
    setTimeout(function loaderClose(){
        preloader.style.display = 'none';
    }, 500);
}, 500);

