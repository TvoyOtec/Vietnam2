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
const zeroBut = document.querySelector('#zero')
const zero2But = document.querySelector('#zero2')
let minus = false
let plus = false
let devide = false
let multiple = false
let listNum = 0;


zeroBut.addEventListener('click', function(){
    inputCalc.value = String(inputCalc.value)  + "0"
})
zero2But.addEventListener('click', function(){
    inputCalc.value = String(inputCalc.value)  + "00"
})


function minusFunc(){
    let s1 = String(inputCalc.value).split('-')
    inputCalc.value = Math.floor((parseFloat(s1[0]) - parseFloat(s1[1])) * 100) / 100
    List(s1[0] + '-' + s1[1] + '=' + inputCalc.value)
    minus = false
}

function plusFunc(){
    let s2 = String(inputCalc.value).split('+')
    inputCalc.value = Math.floor((parseFloat(s2[0]) + parseFloat(s2[1])) * 100) / 100
    List(s2[0] + '+' + s2[1] + '=' + inputCalc.value)
    plus = false
}

function devideFunc(){
    let s3 = String(inputCalc.value).split('÷')
    inputCalc.value = Math.floor((parseFloat(s3[0]) / parseFloat(s3[1])) * 100) / 100
    List(s3[0] + '÷' + s3[1] + '=' + inputCalc.value)
    devide = false
}

function multipleFunc(){
    let s4 = String(inputCalc.value).split('×')
    inputCalc.value = Math.floor((parseFloat(s4[0]) * parseFloat(s4[1])) * 100) / 100
    List(s4[0] + '×' + s4[1] + '=' + inputCalc.value)
    multiple = false
}

function makeLast(){
    if(minus){
        minusFunc()
    } else if(plus){
        plusFunc()
    } else if(devide){
        devideFunc()
    } else if(multiple){
        multipleFunc()
    }
}

function List(inner){
    listNum++
    const CreateHistory = document.createElement('li')
    CreateHistory.setAttribute('type', `none`)
    CreateHistory.innerHTML = `${listNum} ᐅ ${inner}`;
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
    minus = false
    plus = false
    devide = false
    multiple = false
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
    makeLast()
    minus = true
    inputCalc.value = String(inputCalc.value) + "-"
})
PlusBut.addEventListener('click', function() {
    makeLast()
    plus = true
    inputCalc.value = String(inputCalc.value) + "+"
})
DevideBut.addEventListener('click', function() {
    makeLast()
    devide = true
    inputCalc.value = String(inputCalc.value) + "÷"
})
MultipleBut.addEventListener('click', function() {
    makeLast()
    multiple = true
    inputCalc.value = String(inputCalc.value) + "×"
})
result.addEventListener('click', function() {
    makeLast()
})