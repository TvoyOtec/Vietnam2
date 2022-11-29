var mainE = document.querySelector('.mainEbat')
function createNotiff() {
    let divNot = document.createElement('div')
    divNot.className = 'SuccesNotif'
    divNot.innerHTML = '<img src="IMAGE/check.png" alt=""><span id="SpanNotify"></span>'
    mainE.insertBefore(divNot, mainE.firstChild)
}
function createSmallNotiff() {
    let divNotSmall1 = document.createElement('div'),
        divNotSmall2 = document.createElement('div')
    divNotSmall1.className = 'SuccesNotifSmall'
    divNotSmall2.className = 'LessNotifSmall'
    divNotSmall1.innerHTML = '<img src="IMAGE/check.png" alt=""><span id="spannotifsucces"></span>'
    divNotSmall2.innerHTML = '<img src="IMAGE/cancel.png" alt=""><span id="spannotiffailed"></span>'
    mainE.insertBefore(divNotSmall1, mainE.firstChild)
    divNotSmall1.after(divNotSmall2, mainE.firstChild)
}
function successCommand(f) {
    const SpanNotifyCommand = document.querySelector('#SpanNotify'),
        SuccessNotifyCommand = document.querySelector('.SuccesNotif');

    SpanNotifyCommand.innerHTML = f;
    SuccessNotifyCommand.style.opacity = "1";
    setTimeout(() => { SuccessNotifyCommand.style.opacity = '0' }, 2000)
}

function success(f) {
    const SuccessNotifySpan = document.querySelector('#spannotifsucces'),
        SuccessNotify = document.querySelector('.SuccesNotifSmall');

    SuccessNotify.style.opacity = "1";
    SuccessNotifySpan.innerHTML = `${f}`
    setTimeout(() => { SuccessNotify.style.opacity = '0' }, 2000)
}
function failed(f) {
    const FailedNotifySpan = document.querySelector('#spannotiffailed'),
        FailedNotify = document.querySelector('.LessNotifSmall');

    FailedNotify.style.opacity = "1";
    FailedNotifySpan.innerHTML = `${f}`
    setTimeout(() => { FailedNotify.style.opacity = '0' }, 2000)
}
