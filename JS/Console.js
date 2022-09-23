const inputConsole = document.querySelector('#InputConsole');
const OutputConsole = document.querySelector('.viewConsole');
const SuccessNotifyCommand = document.querySelector('.SuccesNotif');
const SpanNotifyCommand = document.querySelector('#SpanNotify')
const ButtonMobile = document.querySelector('.mobileBut')
const console = document.querySelector('.console')
let Count = 1;
let darkmode = false;

function successCommand(f){
    SpanNotifyCommand.innerHTML = f;
    SuccessNotifyCommand.style.opacity = "1";
    setTimeout("SuccessNotifyCommand.style.opacity = '0' ", 2000);
}

function buttonOn(){
    ButtonMobile.style.display = 'flex';
}

function buttonOff(){
    ButtonMobile.style.display = 'none';
}

function OutpCommand(name){
    const OutputConsolep = document.createElement('p')
    Count++;
    OutputConsolep.setAttribute('id', `OutputConsole${Count}`)
    OutputConsolep.innerHTML = `-${name}`;
    OutputConsolep.className = 'outputConsole';
    if(darkmode){
            OutputConsolep.style.color = 'rgb(250, 71, 71)';
    } else {
        OutputConsolep.style.color = 'rgb(126, 25, 25)';
    }
    OutputConsole.append(OutputConsolep);
    OutputConsole.scrollTo(0, Count * 100)
}

function YourCommandWriter(){
    const OutputConsolep = document.createElement('p');
    Count++;
    OutputConsolep.setAttribute('id', `OutputConsole${Count}`);
    OutputConsolep.className = 'outputConsole';
    OutputConsolep.innerHTML = `-${inputConsole.value}`;
    if(darkmode){
        OutputConsolep.style.color = 'rgb(114, 197, 107)';
    } else {
        OutputConsolep.style.color = 'rgb(52, 121, 25)';
    }
    OutputConsole.append(OutputConsolep);
}

function AddCoins(many){
    localStorage.setItem("ratetick", many)
    OutputConsole.scrollTo(0, Count * 100)
}

function AddPayDay(many){
    localStorage.setItem("yantick", many)
    OutputConsole.scrollTo(0, Count * 100)
}

function DarkMode(){
    darkmode = true
    console.style.background = "rgb(65, 65, 65)"
}

function LightMode(){
    darkmode = false
    console.style.background = "white"
}

function Main(e){
        YourCommandWriter()
        let huys = Count;
        let preCommandNum = huys - 2;
        let preCommand = document.getElementById(`OutputConsole${preCommandNum}`).textContent;
        if(inputConsole.value == "changecoins"){
            OutpCommand("how many?")
            console.log(Count, preCommand, localStorage)
        } else if(preCommand == "-changecoins"){
            let coinSCome = parseInt(inputConsole.value);
            AddCoins(coinSCome)
            successCommand(`Social rating = ${coinSCome}`)
        } else if(inputConsole.value == "changepayday"){
            OutpCommand("how many?")
        } else if(preCommand == "-changepayday"){
            let PaydayCome = parseInt(inputConsole.value);
            AddPayDay(PaydayCome)
            successCommand(`Заралата теперь равна ${PaydayCome}`)
        } else if(inputConsole.value == "buttonon"){
            buttonOn()
            successCommand(`Кнопка включена`)
        } else if(inputConsole.value == "buttonoff"){
            buttonOff()
            successCommand(`Кнопка выключена`)
        } else if(inputConsole.value == "help"){
            OutpCommand("changepayday");
            OutpCommand("changecoins");
            OutpCommand("buttonoff");
            OutpCommand("buttonon");
            OutpCommand("darkmode");
            OutpCommand("lightmode");
        }else if(inputConsole.value == "darkmode"){
            DarkMode()
            successCommand(`Включена темная тема`)
        }else if(inputConsole.value == "lightmode"){
            LightMode()
            successCommand(`Включена светлая тема`)
        }else {
            OutpCommand("Unknown command");
 
        inputConsole.value = "";
    };

}

inputConsole.addEventListener('keyup', function(e){
    if(e.code == "Enter" || e.keycode == "39" || e.keycode == "13"){
        Main(e)
        inputConsole.value = "";
    }
})
ButtonMobile.addEventListener('click', function(e){
    Main(e)
    inputConsole.value = "";
})