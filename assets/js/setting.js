import { getTimeOfDay } from "./greeting";

const settingButton = document.querySelector('.setting__link');
const settingPanel = document.querySelector('.setting');

settingButton.addEventListener('click', function() {
settingPanel.classList.toggle('setting-show');
})


function setGlobalLanguage() {
    let defaultLanguage = 'en';
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', defaultLanguage);
    }
}

function setGlobalLinkSource() {
    let defaultLinkSource = 'github';
    if (!localStorage.getItem('link')) {
        localStorage.setItem('link', defaultLinkSource);
    }
}

export function setGlobalKeyWords() {
    let defaultLinkSource = getTimeOfDay(localStorage.getItem('lang'));
    if (!localStorage.getItem('keywords')) {
        localStorage.setItem('keywords', defaultLinkSource);
    }
}



export default function initSetting () {
    setGlobalLanguage();
    setGlobalLinkSource();
    setGlobalKeyWords();
}
