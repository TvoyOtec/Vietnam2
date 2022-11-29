const preloader = document.querySelector('.preloader'),
    circle = document.querySelector('.proBarCircle'),
    radius = circle.r.baseVal.value,
    dlina = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${dlina} ${dlina}`;
circle.style.strokeDashoffset = dlina;

function progress(percent) {
    const offset = dlina - percent / 100 * dlina;
    circle.style.strokeDashoffset = offset;
}

let s = 0,
    id = setInterval(frame, 1);

function frame() {
    if (s == 100) {
        clearInterval(id);
    } else {
        s++;
        progress(s)
    }
}

window.onload = setTimeout(function loaderCloseAnim() {
    preloader.style.animation = 'preloader 0.8s linear';
    preloader.style.Webkitanimation = 'preloader 0.8s linear';
    setTimeout(function loaderClose() {
        preloader.style.display = 'none';
    }, 700);
}, 350);

