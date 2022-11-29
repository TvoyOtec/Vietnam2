let kolvo = 1,
    yanBuy = 5,
    socrating = parseInt(localStorage.getItem('ratetick'), 10),
    yan = parseInt(localStorage.getItem('yantick'), 10);

const list = document.querySelector('.bonusList'),
    button = document.querySelector('#taiwanBut'),
    rateinfo = document.querySelector('.socCredit'),
    yaninfo = document.querySelector('.Yan'),
    oneCost = 1000;

// boosts
while (kolvo < 31) {
    socrat = yanBuy * oneCost;
    let li = document.createElement('a'),
        themes = localStorage.getItem('darkmode')
    if (themes == 1) {
        li.innerHTML = `<li class="liBlack" type="none" id="${kolvo}"><img class="liIMG" src="IMAGE/plus.png" alt="" id="${kolvo}"><p id="${kolvo}" class="YanPLusBlack">+${yanBuy} ¥</p> <p id="${kolvo}" class="socMinus">-${socrat} social credit</p></li>`;
    } else {
        li.innerHTML = `<li class="li" type="none" id="${kolvo}"><img class="liIMG" src="IMAGE/plus.png" alt="" id="${kolvo}"><p id="${kolvo}" class="YanPLus">+${yanBuy} ¥</p> <p id="${kolvo}" class="socMinus">-${socrat} social credit</p></li>`;
    }
    li.className = 'liA';
    li.setAttribute("href", "#li");
    li.setAttribute("id", `${kolvo}`);
    list.append(li);
    if (yanBuy == 1) {
        yanBuy = yanBuy + 4;
    } else {
        yanBuy = yanBuy + 5;
    };
    kolvo = kolvo + 1;
};

//ratemonitor, payday and click

function payday() {
    socrating = socrating + yan;
}

function ratingMonitor() {
    yaninfo.innerHTML = `${yan}`;
    rateinfo.innerHTML = `${socrating}`;
    localStorage.setItem("ratetick", socrating)
    localStorage.setItem("yantick", yan)
    if (!socrating || 0 === socrating.length) {
        socrating = 0;
    };
    if (!yan || 0 === yan.length) {
        yan = 0;
    }
}

ratingMonitor()

button.addEventListener('click', function plus() {
    socrating++;
    console.log(socrating);
    ratingMonitor();
});

// notification


// boost add script
list.addEventListener('click', e => {
    let ids = parseInt(e.target.id);
    if (ids == 0 && socrating >= oneCost) {
        socrating = socrating - oneCost;
        yan = yan + 1;
        console.log(ids, yan)
        success(`Бить, бить, успех`);
    } else if (ids == 0) {
        console.log('huy', ids);
        failed(`Вы разочаровали партию `);
    }
    if (ids > 0) {
        socrating = socrating - (ids * 5 * oneCost);
        yan = yan + ids * 5
        if (socrating < 0) {
            socrating = socrating + (ids * 5 * oneCost);
            yan = yan - ids * 5;
            nea = true;
            failed(`Вы разочаровали партию `);
        } else {
            success(`Бить, бить, успех`);
        }
    }
})

// click effect
// let CoinButton = document.querySelectorAll('.liA')
// CoinButton.forEach(btn => {
//     btn.addEventListener('click', function (e) {
//         let x = e.pageX
//         let y = e.pageY
//         let rippleeffect = document.createElement('span')
//         rippleeffect.className = "ripple"
//         rippleeffect.style.left = `${x}px`
//         rippleeffect.style.top = `${y}px`
//         this.appendChild(rippleeffect)

//         setInterval(() => {
//             rippleeffect.remove()
//         }, 900);
//     })
// })


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