export const languageButton = document.querySelector('.change-language');

function getGlobalLanguage() {
    let defaultLanguage = 'en';
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', defaultLanguage);
    }
    languageButton.innerHTML = localStorage.getItem('lang');
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
