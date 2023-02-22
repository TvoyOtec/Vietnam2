const downloadList = [
    {
        url: 'Files/app-release.apk',
        img: 'IMAGE/logo.png',
        what: 'apk',
        name: 'Vietnam app',
        ml: 190
    },
    {
        url: 'Files/MCK.apk',
        img: 'IMAGE/logo MCK.png',
        what: 'apk',
        name: 'MCK app',
        ml: 145
    },
    {
        url: 'Files/MInstAll_v19.01.2020.torrent',
        img: 'IMAGE/utorrent.png',
        what: 'torrent',
        name: 'MinstAll',
        ml: 115
    },
    {
        url: 'Files/EmptyStandbyList.exe',
        img: 'IMAGE/windows.png',
        what: 'exe',
        name: 'EmptyStandByList',
        ml: 255
    }
],
    DownloadListCount = downloadList.length,
    media = window.matchMedia('(max-device-width: 500px)')

if (media.matches) {
    downloadList[0].ml = 250
    downloadList[3].ml = 385
}

function createDownloadList() {
    for (let i = 0; i < DownloadListCount; i++) {
        let theme = localStorage.getItem('darkmode'),
            DownloadLi = document.createElement('li'),
            downloadButtonClass = '',
            downloadlistLiClass = '',
            downloadWhatClass = ''
        if (theme == 1) {
            downloadButtonClass = 'downloadButtonLiBlack'
            downloadlistLiClass = 'downloadlistLiBlack'
            downloadWhatClass = 'downloadWhatBlack'
        } else {
            downloadButtonClass = 'downloadButtonLi'
            downloadlistLiClass = 'downloadlistLi'
            downloadWhatClass = 'downloadWhat'
        }
        DownloadLi.className = downloadlistLiClass
        DownloadLi.innerHTML =
            `<a class="${downloadButtonClass}" href="${downloadList[i].url}">
            <img class="downloadIMG" src="${downloadList[i].img}" alt="">
            <p class="downloadName">${downloadList[i].name}</p>
            <span style="margin-left: ${downloadList[i].ml}px;" class="${downloadWhatClass}">${downloadList[i].what}</span>
        </a>`
        document.querySelector('.downloadlistUL').append(DownloadLi)
    }
}

createDownloadList()