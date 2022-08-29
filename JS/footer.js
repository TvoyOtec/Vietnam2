function NewDate(){
    let FooterDate = document.querySelector('#Date') 
    let NowDate = new Date;
    let NowTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    FooterDate.innerHTML = NowDate.toLocaleString("ru", NowTime);
};
NewDate();
setInterval("NewDate()", 1000);
