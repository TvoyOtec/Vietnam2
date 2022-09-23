let kolvo = 1;
let yanBuy = 5;
const oneCost = 1000;
let socrating = parseInt(localStorage.getItem('ratetick'), 10);
let yan = parseInt(localStorage.getItem('yantick'), 10);;
const list = document.querySelector('.bonusList');
const button = document.querySelector('#taiwanBut');
const rateinfo = document.querySelector('.socCredit');
const yaninfo = document.querySelector('.Yan');
const SuccessNotify = document.querySelector('.SuccesNotifSmall');
const FailedNotify = document.querySelector('.LessNotifSmall');

// boosts
while(kolvo < 21){
    socrat = yanBuy * oneCost;
    let li = document.createElement('a');
    li.innerHTML = `<li class="li" type="none" id="${kolvo}"><img class="liIMG" src="IMAGE/plus.png" alt="" id="${kolvo}"><p id="${kolvo}" class="YanPLus">${yanBuy} ¥</p> <p id="${kolvo}" class="socMinus">-${socrat} social credit</p></li>`;
    li.className = 'liA';
    li.setAttribute("href", "#li");
    li.setAttribute("id", `${kolvo}`);
    list.append(li);
    if(yanBuy == 1){
        yanBuy = yanBuy + 4;
    } else {
        yanBuy = yanBuy + 5;
    };
    kolvo = kolvo + 1;
};

//ratemonitor, payday and click

function payday(){
    socrating = socrating + yan;
}

function ratingMonitor(){
    yaninfo.innerHTML = `${yan}`;
    rateinfo.innerHTML = `${socrating}`;
    localStorage.setItem("ratetick", socrating)
    localStorage.setItem("yantick", yan)
    if(!socrating || 0 === socrating.length){
        socrating = 0;
    };
    if(!yan || 0 === yan.length){
        yan = 0;
    }
}

ratingMonitor()

button.addEventListener('click', function plus(){
    socrating++;
    console.log(socrating);
    ratingMonitor();
});

// notification
function success(){
    SuccessNotify.style.opacity = "1";
    setTimeout("SuccessNotify.style.opacity = '0' ", 2000)
}
function failed(){
    FailedNotify.style.opacity = "1";
    setTimeout("FailedNotify.style.opacity = '0' ", 2000)
}


// boost add script
list.addEventListener('click', e => {
    let ids = parseInt(e.target.id);
    if(ids == 0 && socrating >= oneCost){
        socrating = socrating - oneCost;
        yan = yan + 1;
        console.log(ids, yan)
        success();
    } else if(ids == 0){
        console.log('huy', ids);
        failed();
    }
    if(ids > 0){
        socrating = socrating - (ids * 5 * oneCost);
        yan = yan + ids * 5
        if(socrating < 0){
            socrating = socrating + (ids * 5 * oneCost);
            yan = yan - ids * 5;
            nea = true;
            failed();
        } else {
            success();
        }
    }
})

setInterval("ratingMonitor()", 100);
setInterval("payday()", 1000);


// isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };

// if (isMobile.any()) {
//     document.querySelector('.li')
// }

