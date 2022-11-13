const dialogModal = document.querySelector('dialog')
const inplog = document.querySelector('#inplog')
const inppas = document.querySelector('#inppas')
const logbut = document.querySelector('#logbut')
const loginfo = document.querySelector('.loginfo')
let Root = localStorage.getItem("admin")
if (!Root || 0 === Root.length) {
    Root = 0;
};
let user1 = {
    login: 'Dora',
    password: 'Dura',
    name: 'Каво и шо',
    logo: 'IMAGE/user1.png',
    admin: true
}

logbut.addEventListener('click', () => {
    dialogModal.showModal()
    dialogModal.style.opacity = '1'
})


function closemodal() {
    dialogModal.style.opacity = '0'
    setTimeout(() => {
        dialogModal.close()
    }, 600);
}
document.querySelector('.cancelBut').addEventListener('click', () => {
    closemodal()
})


function loggined(name, img, admin) {
    logbut.style.display = 'none'
    loginfo.style.display = 'flex'
    document.querySelector('.loginspan').innerHTML = `${name}`
    document.querySelector('.loginlogo').src = `${img}`
    if (admin) {
        Root = 1
        localStorage.setItem("admin", Root)
    }
}

function userChange() {
    let curruser = {
        login: String(inplog.value),
        password: String(inppas.value)
    }
    if (user1.login == curruser.login) {
        if (user1.password == curruser.password) {
            closemodal()
            setTimeout(() => { successCommand(`Вы вошли как ${user1.name}`) }, 300);
            localStorage.setItem("user", 1)
        }
    }
}


document.querySelector('.loginBut').addEventListener('click', () => {
    userChange()
})


inppas.addEventListener('keydown', (e) => {
    if (e.code == "Enter" || e.keycode == "39" || e.keycode == "13") {
        userChange()
    }
})

inplog.addEventListener('keydown', (e) => {
    if (e.code == "Enter" || e.keycode == "39" || e.keycode == "13") {
        inppas.focus()
    }
})

function userChecker() {
    if (localStorage.getItem("user") == 1) {
        loggined(`${user1.name}`, `${user1.logo}`, user1.admin)
    } else if (localStorage.getItem("user") == 0) {
        Root = 0
        localStorage.setItem("admin", Root)
        logbut.style.display = 'inherit'
        loginfo.style.display = 'none'
    }
}

document.querySelector('.quitBut').addEventListener('click', () => {
    localStorage.setItem("user", 0)
    userChecker()
})

setInterval(() => {
    userChecker()
}, 0);

const themechecked = document.querySelector('.inpcheck')
themechecked.addEventListener('click', () => {
    if (localStorage.getItem("darkmode") == 1) {
        localStorage.setItem("darkmode", 2)
        themechecked.checked = false
        window.location.reload()
    } else {
        localStorage.setItem("darkmode", 1)
        themechecked.checked = true
        window.location.reload()
    }
})
