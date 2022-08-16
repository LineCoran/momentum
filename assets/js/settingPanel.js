const settingItemTitle = document.querySelectorAll('.setting__item__text');
const widgetItemText = document.querySelectorAll('.vidjet__text');
const settingButtonLink = document.querySelector('.setting__link__text');
const settingButtonDone = document.getElementById('done__text');
const settingButtonDelete = document.getElementById('delete__text');
const settingButtonLabel = document.getElementById('keywordsinputmain');

const wordsForSettingButton = {
    en: 'Setting',
    ru: 'Настройки',
}

const wordsForButtonDone = {
    en: 'Done',
    ru: 'Применить',
}


const wordsForButtonDelete = {
    en: 'Delete',
    ru: 'Убрать',
}

const wordsForSettingLabel = {
    en: 'key words',
    ru: 'ключевые слова',
}

const wordsForTitle = {
    en: ['Apllication Language', 'Image Source', 'Widgets'],
    ru: ['Язык приложения', 'Источник фотографий', 'Виджеты'],
}

const wordsForText = {
    en: ['Time', 'Date', 'Weather', 'Player', 'Greeting', 'Quotes', 'To Do List'],
    ru: ['Время', 'Дата', 'Погода', 'Плеер', 'Приветствие', 'Цитаты', 'Список дел'],
}

export default function initPanel() {
    let currentLanguage = localStorage.getItem('lang');

    settingButtonLink.innerHTML = wordsForSettingButton[currentLanguage];
    for (let i = 0; i<settingItemTitle.length; i++){
        settingItemTitle[i].innerHTML = wordsForTitle[currentLanguage][i];
    }
    for (let i = 0; i<widgetItemText.length; i++){
        widgetItemText[i].innerHTML = wordsForText[currentLanguage][i];
    }

    settingButtonLabel.innerHTML = wordsForSettingLabel[currentLanguage];
    settingButtonDone.innerHTML = wordsForButtonDone[currentLanguage];
    settingButtonDelete.innerHTML = wordsForButtonDelete[currentLanguage];
}