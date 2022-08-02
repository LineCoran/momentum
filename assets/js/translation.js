import showGreeting from "./greeting";
import getWheter from "./weather";
import initQuotes from "./quotes"

function translateGreating(){ 
    let currentLanguage = localStorage.getItem('lang');
    if (currentLanguage=="en") {
        localStorage.setItem('lang', 'ru');
    } else {
        localStorage.setItem('lang', 'en');
    }
}


export default function initTraslation() {
    document.addEventListener('click', function() {
        translateGreating()
        getWheter();
        initQuotes();
        showGreeting();
    })
}

