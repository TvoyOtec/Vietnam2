const inputConsole = document.querySelector('#InputConsole');
const OutputConsole = document.querySelector('.viewConsole');
const SuccessNotifyCommand = document.querySelector('.SuccesNotif');
const SpanNotifyCommand = document.querySelector('#SpanNotify')
let Count = 1;

function successCommand(f){
    SpanNotifyCommand.innerHTML = f;
    SuccessNotifyCommand.style.opacity = "1";
    setTimeout("SuccessNotifyCommand.style.opacity = '0' ", 2000);
}

function OutpCommand(name){
    const OutputConsolep = document.createElement('p')
    Count++;
    OutputConsolep.setAttribute('id', `OutputConsole${Count}`)
    OutputConsolep.innerHTML = `-${name}`;
    OutputConsolep.className = 'outputConsole';
    OutputConsolep.style.color = 'red';
    OutputConsole.append(OutputConsolep);
    OutputConsole.scrollTo(0, Count * 100)
}

function YourCommandWriter(){
    const OutputConsolep = document.createElement('p');
    Count++;
    OutputConsolep.setAttribute('id', `OutputConsole${Count}`);
    OutputConsolep.className = 'outputConsole';
    OutputConsolep.innerHTML = `-${inputConsole.value}`;
    OutputConsole.append(OutputConsolep);
    OutputConsolep.style.color = 'green';
}

function AddCoins(many){
    localStorage.setItem("ratetick", many)
    OutputConsole.scrollTo(0, Count * 100)
}

function AddPayDay(many){
    localStorage.setItem("yantick", many)
    OutputConsole.scrollTo(0, Count * 100)
}

inputConsole.addEventListener('keyup', function(e) {
    if(e.code == "Enter"){
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
        } else {
            OutpCommand("Unknown command");
        }
 
        inputConsole.value = "";
    };

})