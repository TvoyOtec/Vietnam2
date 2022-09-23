const result = document.querySelector('#result');
const inputCalc = document.querySelector('.inputCalc');
const NumberBut = document.querySelector('.calcNumers')
const ClearAllBut = document.querySelector('#clearAll')
const ClearBut = document.querySelector('#clear')
const PointBut = document.querySelector('#point')
const MinustBut = document.querySelector('#minus')
const PlusBut = document.querySelector('#plus')
const DevideBut = document.querySelector('#devide')
const MultipleBut = document.querySelector('#multiple')
const History = document.querySelector('.historyList')
let minus = false
let plus = false
let devide = false
let multiple = false

function List(inner){
    const CreateHistory = document.createElement('li')
    CreateHistory.setAttribute('type', `none`)
    CreateHistory.innerHTML = `${inner}`;
    History.append(CreateHistory);
}

NumberBut.addEventListener('click', e => {
    let ids = parseInt(e.target.id);
    if(ids || 0 === ids.length){
        inputCalc.value = inputCalc.value + ids;
    }
})
ClearAllBut.addEventListener('click', function() {
    inputCalc.value = '';
})
ClearBut.addEventListener('click', function() {
    if(inputCalc.value[inputCalc.value.length - 1] === '-'){
        minus = false
    }
    if(inputCalc.value[inputCalc.value.length - 1] === '+'){
        plus = false
    }
    if(inputCalc.value[inputCalc.value.length - 1] === '÷'){
        devide = false
    }
    if(inputCalc.value[inputCalc.value.length - 1] === '×'){
        multiple = false
    }
    console.log(plus, minus, devide, multiple)
    inputCalc.value = inputCalc.value.slice(0, -1)
})
PointBut.addEventListener('click', function() {
    inputCalc.value = String(inputCalc.value) + "."
})
MinustBut.addEventListener('click', function() {
    minus = true
    inputCalc.value = String(inputCalc.value) + "-"
})
PlusBut.addEventListener('click', function() {
    plus = true
    inputCalc.value = String(inputCalc.value) + "+"
})
DevideBut.addEventListener('click', function() {
    devide = true
    inputCalc.value = String(inputCalc.value) + "÷"
})
MultipleBut.addEventListener('click', function() {
    multiple = true
    inputCalc.value = String(inputCalc.value) + "×"
})
result.addEventListener('click', function() {
    if(minus){
        let s1 = String(inputCalc.value).split('-')
        inputCalc.value = Math.floor((parseFloat(s1[0]) - parseFloat(s1[1])) * 100) / 100
        List(s1[0] + '-' + s1[1] + '=' + inputCalc.value)
        minus = false
    } else if(plus){
        let s2 = String(inputCalc.value).split('+')
        inputCalc.value = Math.floor((parseFloat(s2[0]) + parseFloat(s2[1])) * 100) / 100
        List(s2[0] + '+' + s2[1] + '=' + inputCalc.value)
        plus = false
    }else if(devide){
        let s3 = String(inputCalc.value).split('÷')
        inputCalc.value = Math.floor((parseFloat(s3[0]) / parseFloat(s3[1])) * 100) / 100
        List(s3[0] + '÷' + s3[1] + '=' + inputCalc.value)
        devide = false
    }else if(multiple){
        let s4 = String(inputCalc.value).split('×')
        inputCalc.value = Math.floor((parseFloat(s4[0]) * parseFloat(s4[1])) * 100) / 100
        List(s4[0] + '×' + s4[1] + '=' + inputCalc.value)
        multiple = false
    }
})