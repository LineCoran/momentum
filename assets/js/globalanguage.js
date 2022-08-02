export default function getGlobalLanguage() {
    let defaultLanguage = 'en';
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', defaultLanguage);
    }
}