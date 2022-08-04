import showGreeting from "./greeting";
import getWheter from "./weather";
import initQuotes from "./quotes";
import { langButton } from "./setting";
import showDate from "./date";

const label = document.querySelector('.label__circle');


function translateGreating(){ 
    let currentLanguage = localStorage.getItem('lang');
    if (currentLanguage=="en") {
        localStorage.setItem('lang', 'ru');
    } else {
        localStorage.setItem('lang', 'en');
    };
}


export default function initTraslation() {
    langButton.addEventListener('click', function(event) {
        console.log('hello');
        langButton.parentElement.classList.toggle('label-active');
        label.classList.toggle('label__circle-active');
        translateGreating()
        getWheter();
        initQuotes();
        showGreeting();
        showDate();
    })
}

