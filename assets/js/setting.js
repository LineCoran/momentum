export const langButton = document.getElementById('change_lang');

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
