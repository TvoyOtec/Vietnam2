const inputConsole = document.querySelector('#InputConsole');
const OutputConsole = document.querySelector('.viewConsole');
const SuccessNotifyCommand = document.querySelector('.SuccesNotif');
const SpanNotifyCommand = document.querySelector('#SpanNotify')
const ButtonMobile = document.querySelector('.mobileBut')
const console = document.querySelector('.console')
let darkmode = localStorage.getItem("darkmode")
let Count = 1;

function successCommand(f) {
    SpanNotifyCommand.innerHTML = f;
    SuccessNotifyCommand.style.opacity = "1";
    setTimeout("SuccessNotifyCommand.style.opacity = '0' ", 2000);
}

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
    let huys = Count;
    let preCommandNum = huys - 2;
    let preCommand = document.getElementById(`OutputConsole${preCommandNum}`).textContent;
    if (inputConsole.value == "changecoins") {
        OutpCommand("how many?")
        console.log(Count, preCommand, localStorage)
    } else if (preCommand == "-changecoins") {
        let coinSCome = parseInt(inputConsole.value);
        AddCoins(coinSCome)
        successCommand(`Social rating = ${coinSCome}`)
    } else if (inputConsole.value == "changepayday") {
        OutpCommand("how many?")
    } else if (preCommand == "-changepayday") {
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
        OutpCommand(" 1: changepayday");
        OutpCommand(" 2: changecoins");
        OutpCommand(" 3: buttonoff");
        OutpCommand(" 4: buttonon");
        OutpCommand(" 5: darkmode or dark or darktheme");
        OutpCommand(" 6: lightmode or whitetheme or lighttheme or whitemode or white or light");
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