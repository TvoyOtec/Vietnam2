const inputConsole = document.querySelector('#InputConsole'),
    OutputConsole = document.querySelector('.viewConsole'),
    ButtonMobile = document.querySelector('.mobileBut'),
    console = document.querySelector('.console')

let darkmode = localStorage.getItem("darkmode"),
    Count = 1;


function buttonOn() {
    ButtonMobile.style.display = 'flex';
}

function buttonOff() {
    ButtonMobile.style.display = 'none';
}

function OutpCommand(name) {
    const OutputConsolep = document.createElement('p')
    Count++;
    OutputConsolep.setAttribute('id', `OutputConsole${Count}`)
    OutputConsolep.innerHTML = `- ${name}`;
    OutputConsolep.className = 'outputConsole';
    OutputConsolep.style.color = 'rgb(250, 71, 71)';
    OutputConsole.append(OutputConsolep);
    OutputConsole.scrollTo(0, Count * 100)
    inputConsole.value = "";
}

function YourCommandWriter() {
    const OutputConsolep = document.createElement('p');
    Count++;
    OutputConsolep.setAttribute('id', `OutputConsole${Count}`);
    OutputConsolep.className = 'outputConsole';
    OutputConsolep.innerHTML = `- ${inputConsole.value}`;
    OutputConsolep.style.color = 'rgb(114, 197, 107)';
    OutputConsole.append(OutputConsolep);
}

function AddCoins(many) {
    localStorage.setItem("ratetick", many)
    OutputConsole.scrollTo(0, Count * 100)
}

function AddPayDay(many) {
    localStorage.setItem("yantick", many)
    OutputConsole.scrollTo(0, Count * 100)
}

function Main(e) {
    YourCommandWriter()
    let huys = Count,
        preCommandNum = huys - 2,
        preCommand = document.getElementById(`OutputConsole${preCommandNum}`).textContent;

    if (inputConsole.value == "changecoins") {
        if (localStorage.getItem("admin") == 1) {
            OutpCommand("how many?")
        } else {
            OutpCommand("Woman moment");
            inputConsole.value = "";
        }
    } else if (preCommand == "- changecoins" && localStorage.getItem("admin") == 1) {
        let coinSCome = parseInt(inputConsole.value);
        AddCoins(coinSCome)
        successCommand(`Social rating = ${coinSCome}`)
    } else if (inputConsole.value == "changepayday") {
        if (localStorage.getItem("admin") == 1) {
            OutpCommand("how many?")
        } else {
            OutpCommand("Woman moment");
            inputConsole.value = "";
        }
    } else if (preCommand == "- changepayday" && localStorage.getItem("admin") == 1) {
        let PaydayCome = parseInt(inputConsole.value);
        AddPayDay(PaydayCome)
        successCommand(`Заралата теперь равна ${PaydayCome}`)
    } else if (inputConsole.value == "buttonon") {
        buttonOn()
        successCommand(`Кнопка включена`)
    } else if (inputConsole.value == "buttonoff") {
        buttonOff()
        successCommand(`Кнопка выключена`)
    } else if (inputConsole.value == "help") {
        if (localStorage.getItem("admin") == 1) {
            OutpCommand(" changepayday");
            OutpCommand(" changecoins");
        }
        OutpCommand(" buttonoff");
        OutpCommand(" buttonon");
        OutpCommand(" darkmode or dark or darktheme");
        OutpCommand(" lightmode or whitetheme or lighttheme or whitemode or white or light");
    } else if (inputConsole.value == "darkmode" || inputConsole.value == "dark" || inputConsole.value == "darktheme") {
        darkmode = 1
        localStorage.setItem("darkmode", 1)
        successCommand(`Включена темная тема. Обновите страницу`)
    } else if (inputConsole.value == "lightmode" || inputConsole.value == "light" || inputConsole.value == "white" || inputConsole.value == "whitemode" || inputConsole.value == "lighttheme" || inputConsole.value == "whitetheme") {
        darkmode = 2
        localStorage.setItem("darkmode", 2)
        successCommand(`Включена светлая тема. Обновите страницу`)
    } else {
        OutpCommand("Unknown command");
        inputConsole.value = "";
    };

}
inputConsole.addEventListener('keyup', function (e) {
    if (e.code == "Enter" || e.keycode == "39" || e.keycode == "13") {
        Main(e)
        inputConsole.value = "";
    }
})
ButtonMobile.addEventListener('click', function (e) {
    Main(e)
    inputConsole.value = "";
})