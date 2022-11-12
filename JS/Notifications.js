function successCommand(f) {
    const SpanNotifyCommand = document.querySelector('#SpanNotify')
    const SuccessNotifyCommand = document.querySelector('.SuccesNotif');
    SpanNotifyCommand.innerHTML = f;
    SuccessNotifyCommand.style.opacity = "1";
    setTimeout(() => { SuccessNotifyCommand.style.opacity = '0' }, 2000)
}

function success(f) {
    const SuccessNotifySpan = document.querySelector('#spannotifsucces')
    const SuccessNotify = document.querySelector('.SuccesNotifSmall');
    SuccessNotify.style.opacity = "1";
    SuccessNotifySpan.innerHTML = `${f}`
    setTimeout(() => { SuccessNotify.style.opacity = '0' }, 2000)
}
function failed(f) {
    const FailedNotifySpan = document.querySelector('#spannotiffailed')
    const FailedNotify = document.querySelector('.LessNotifSmall');
    FailedNotify.style.opacity = "1";
    FailedNotifySpan.innerHTML = `${f}`
    setTimeout(() => { FailedNotify.style.opacity = '0' }, 2000)
}
