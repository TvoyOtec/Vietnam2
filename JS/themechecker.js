const body = document.querySelector('body'),
    header1 = document.querySelector('header'),
    header1a = document.querySelector('.hname_a');
let theme = localStorage.getItem('darkmode');

function HeadersChanger() {
    body.className = "bodyBlack";
    header1.classList.add('headerBlack');
    header1a.classList.add('hname_aBlack');
    let butupstyle = document.head.appendChild(document.createElement("style"));
    butupstyle.innerHTML = ".butUp:before,.butUp:after{background: rgb(218, 218, 218);} #headerIMG {filter: invert(80%);-webkit-filter: invert(80%);} .bonusInfo::before {background: white;}";

}

function ThemeChecker1() {
    if (theme == 1) {
        body.className = "bodyBlack";
        header1.classList.add('headerBlack');
        header1a.classList.add('hname_aBlack');
        const footer = document.querySelector('footer');
        footer.classList.add('footerBlack');
        document.querySelector('.slider').style.filter = "brightness(0.7)"
    };

};


function ThemeChecker2() {
    if (theme == 1) {
        document.querySelector('.li').className = 'liBlack'
        document.querySelector('.YanPLus').className = 'YanPLusBlack'
        document.querySelector('.info').style.background = 'rgb(65, 65, 65)'
        document.querySelector('.info').style.color = 'rgb(218, 218, 218)'
        document.querySelector('h3').style.color = 'rgb(218, 218, 218)'
        document.querySelector('.bonusInfo').style.color = 'rgb(218, 218, 218)'
        HeadersChanger()
    };

};

function ThemeChecker3() {
    if (theme == 1) {
        HeadersChanger()
        console.style.background = "rgb(65, 65, 65)"
        inputConsole.style.color = "white";
    }

};

function ThemeChecker4() {
    if (theme == 1) {
        document.querySelector('.calculator').style.boxShadow = 'box-shadow: 0 0 10px rgb(59, 59, 59), inset 0 0 30px rgb(59, 59, 59);'
        document.querySelector('.historyList').className = 'historylistBlack'
        HeadersChanger()
    };

};
function ThemeChecker5() {
    if (theme == 1) {
        HeadersChanger()
        document.querySelector('.settings').style.background = 'rgb(65, 65, 65)'
        document.querySelector('.logBut').classList.add('logButBlack')
        document.querySelector('.inpcheck').checked = true
    };

};

function ThemeChecker6() {
    if (theme == 1) {
        HeadersChanger()
    };

};
