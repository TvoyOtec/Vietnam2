const dialogModal = document.querySelector('dialog'),
    inplog = document.querySelector('#inplog'),
    inppas = document.querySelector('#inppas'),
    logbut = document.querySelector('#logbut'),
    loginfo = document.querySelector('.loginfo')

let users = [{
    userNum: 1,
    login: 'Dora',
    password: 'Dura',
    name: 'Каво и шо',
    logo: 'IMAGE/user1.png',
    admin: true
},
{
    userNum: 2,
    login: 'Adolf',
    password: 'Hitler',
    name: 'Joe Biden',
    logo: 'IMAGE/user2.jpg',
    admin: true
}],
    Root = localStorage.getItem("admin")

if (!Root || 0 === Root.length) {
    Root = 0;
};

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
    for (let i = 0; i < users.length; i++) {
        if (users[i].login === curruser.login) {
            if (users[i].password === curruser.password) {
                closemodal()
                setTimeout(() => { successCommand(`Вы вошли как ${users[i].name}`) }, 300);
                localStorage.setItem("user", i)
            }
        }
    }
}


document.querySelector('.loginBut').addEventListener('click', () => {
    userChange()
})


inppas.addEventListener('keydown', (e) => {
    if (e.code == "Enter" || e.keycode == 39 || e.keycode == 13) {
        userChange()
    }
})

inplog.addEventListener('keydown', (e) => {
    if (e.code == "Enter" || e.keycode == 39 || e.keycode == 13) {
        inppas.focus()
    }
})

function userChecker() {
    let user = localStorage.getItem("user")
    if (user < 0) {
        Root = 0
        localStorage.setItem("admin", Root)
        logbut.style.display = 'inherit'
        loginfo.style.display = 'none'
        return
    }
    loggined(`${users[user].name}`, `${users[user].logo}`, users[user].admin)
}

document.querySelector('.quitBut').addEventListener('click', () => {
    localStorage.setItem("user", -1)
    userChecker()
})

function SaveData() {
    let blob = new Blob([
        localStorage.getItem("user"),
        "15328",
        localStorage.getItem("admin"),
        "15328",
        localStorage.getItem("ratetick"),
        "15328",
        localStorage.getItem("yantick"),
        "15328",
        localStorage.getItem("sendchecked"),
        "15328",
        localStorage.getItem('darkmode')
    ], { type: 'text/plain' })
    document.querySelector('#SaveDataA').href = URL.createObjectURL(blob)
}

document.querySelector('#LodaDataInp').addEventListener('change', function () {
    let filereader = new FileReader()
    filereader.readAsText(this.files[0])
    filereader.onload = () => {
        let NewResult = filereader.result.split('15328')
        localStorage.setItem('user', NewResult[0])
        localStorage.setItem('admin', NewResult[1])
        localStorage.setItem('ratetick', NewResult[2])
        localStorage.setItem('yantick', NewResult[3])
        localStorage.setItem('sendchecked', NewResult[4])
        localStorage.setItem('darkmode', NewResult[5])
        console.log(filereader, NewResult)
    }
    window.location.reload()
})

setInterval(() => {
    userChecker()
    SaveData()
}, 0);

const themechecked = document.querySelector('#themeChangeSetting')
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

const sendchecked = document.querySelector('#sendChangeSetting'),
    sendcheckedInput = document.querySelector('#sendChangeSettingInput')

function SendButtonChecker() {
    if (localStorage.getItem("sendchecked") == 1) {
        sendcheckedInput.checked = false
    } else {
        sendcheckedInput.checked = true
    }
    console.log(sendcheckedInput.checked)
}
SendButtonChecker()
sendchecked.addEventListener('click', () => {
    if (localStorage.getItem("sendchecked") == 1) {
        localStorage.setItem("sendchecked", 2)
    } else {
        localStorage.setItem("sendchecked", 1)
    }
    SendButtonChecker()
})