const settingButton = document.querySelector('.setting__link');
const settingPanel = document.querySelector('.setting');

settingButton.addEventListener('click', function() {
settingPanel.classList.toggle('setting-show');
})


function getGlobalLanguage() {
    let defaultLanguage = 'en';
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', defaultLanguage);
    }
}

function getGlobalLinkSource() {
    let defaultLinkSource = 'github';
    if (!localStorage.getItem('link')) {
        localStorage.setItem('link', defaultLinkSource);
    }
}

export default function initSetting () {
    getGlobalLanguage();
    getGlobalLinkSource();
}
