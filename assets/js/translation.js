import showGreeting from "./greeting";
import getWheter from "./weather";
import initQuotes from "./quotes";
import { languageButton } from "./globalanguage";
import showDate from "./date";


function translateGreating(){ 
    let currentLanguage = localStorage.getItem('lang');
    if (currentLanguage=="en") {
        localStorage.setItem('lang', 'ru');
    } else {
        localStorage.setItem('lang', 'en');
    };
}


export default function initTraslation() {
    languageButton.addEventListener('click', function() {
        languageButton.innerHTML = localStorage.getItem('lang');
        translateGreating()
        getWheter();
        initQuotes();
        showGreeting();
        showDate();
    })
}

