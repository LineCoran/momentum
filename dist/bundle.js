/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/globalanguage.js":
/*!************************************!*\
  !*** ./assets/js/globalanguage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getGlobalLanguage)\n/* harmony export */ });\nfunction getGlobalLanguage() {\r\n    let defaultLanguage = 'en';\r\n    if (!localStorage.getItem('lang')) {\r\n        localStorage.setItem('lang', defaultLanguage);\r\n    }\r\n}\n\n//# sourceURL=webpack://momentum/./assets/js/globalanguage.js?");

/***/ }),

/***/ "./assets/js/greeting.js":
/*!*******************************!*\
  !*** ./assets/js/greeting.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst greeting = document.querySelector('.greeting');\r\nconst name = document.querySelector('.name');\r\n\r\nfunction getTimeOfDay(language) {\r\n    const listTimeOfDay = {\r\n        en: ['night', 'morning', 'afternoon', 'evening'],\r\n        ru: ['ночи', 'утро', 'день', 'вечер']\r\n    };\r\n    const currentDate = new Date;\r\n    const hours = currentDate.getHours();\r\n    return listTimeOfDay[language][Math.floor(hours / 6)];\r\n}\r\n\r\nfunction showGreeting() {\r\n    let currentLanguage = localStorage.getItem('lang')\r\n    const timeOfDay = getTimeOfDay(currentLanguage); \r\n    let greetingText;\r\n    if (currentLanguage=='en') {\r\n        greetingText = `Good ${timeOfDay}`;\r\n    } else {\r\n        switch(timeOfDay) {\r\n            case 'утро': \r\n                greetingText = 'Доброе утро';\r\n                break;\r\n            case 'день': \r\n                greetingText = 'Добрый дент';\r\n                break;\r\n            case 'вечер': \r\n                greetingText = 'Добрый вечер';\r\n                break;\r\n            case 'ночь': \r\n                greetingText = 'Доброй ночи';\r\n                break;    \r\n        }\r\n    }\r\n    \r\n    greeting.innerHTML = greetingText;\r\n    window.addEventListener('beforeunload', setLocaleStorage);\r\n    window.addEventListener('load', getLocaleStorage);\r\n}\r\n\r\nfunction setLocaleStorage() {\r\n    localStorage.setItem('name', name.value)\r\n}\r\n\r\nfunction getLocaleStorage() {\r\n    if (localStorage.getItem('name')) {\r\n        name.value = localStorage.getItem('name');\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showGreeting);\n\n//# sourceURL=webpack://momentum/./assets/js/greeting.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globalanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalanguage */ \"./assets/js/globalanguage.js\");\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greeting */ \"./assets/js/greeting.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./assets/js/slider.js\");\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes */ \"./assets/js/quotes.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather */ \"./assets/js/weather.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ \"./assets/js/player.js\");\n/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translation */ \"./assets/js/translation.js\");\n\r\n(0,_globalanguage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n// import showTime from \"./time\";\r\n// showTime();\r\n\r\n\r\n(0,_greeting__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n\r\n(0,_quotes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\n(0,_weather__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\r\n(0,_player__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n\r\n(0,_translation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://momentum/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/playList.js":
/*!*******************************!*\
  !*** ./assets/js/playList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst playList = [\r\n    {\r\n        title: 'Aqua Caelestis',\r\n        //src: './../../momentum/assets/sounds/AquaCaelestis.mp3',\r\n        src: 'assets/sounds/AquaCaelestis.mp3',\r\n        duration: 39,\r\n    },\r\n    \r\n    {\r\n        title: 'Ennio Morricone',\r\n        //src: './../../momentum/assets/sounds/EnnioMorricone.mp3',\r\n        src: 'assets/sounds/EnnioMorricone.mp3',\r\n        duration: 97,\r\n    },\r\n    \r\n    {      \r\n        title: 'River Flows In You',\r\n        //src: './../../momentum/assets/sounds/RiverFlowsInYou.mp3',\r\n        src: 'assets/sounds/RiverFlowsInYou.mp3',\r\n        duration: 97\r\n    },\r\n\r\n    {      \r\n        title: 'Summer Wind',\r\n        //src: './../../momentum/assets/sounds/SummerWind.mp3',\r\n        src: 'assets/sounds/SummerWind.mp3',\r\n        duration: 39\r\n    },\r\n\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);\n\n//# sourceURL=webpack://momentum/./assets/js/playList.js?");

/***/ }),

/***/ "./assets/js/player.js":
/*!*****************************!*\
  !*** ./assets/js/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initPlayList)\n/* harmony export */ });\n/* harmony import */ var _playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList.js */ \"./assets/js/playList.js\");\n\r\nconst audio = new Audio();\r\nconst audioButtonPlay = document.querySelector('.play');\r\nconst audioButtonPlayNext = document.querySelector('.play-next');\r\nconst audioButtonPlayPrev = document.querySelector('.play-prev');\r\nconst audioPlayList = document.querySelector('.play-list');\r\nconst audioProgress = document.getElementById('progress__audio');\r\nconst audioVolume = document.querySelector('.volume');\r\nconst audioCurrentName = document.querySelector('.track__name');\r\nconst audioMuteButton = document.querySelector('.audio-mute');\r\nconst audioExactTime = document.getElementById('exact-time');\r\nconst audioDurationTime = document.getElementById('duration-time');\r\nlet currentTimeGlobal = 0;\r\nlet currentVolume;\r\nlet isPlay = false;\r\nlet audioNumber = 0;\r\nlet playListItem;\r\nlet playListBtn;\r\n\r\nfunction createPlayList() {\r\n    _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (el) {\r\n        const li = document.createElement('li');\r\n        li.classList.add('play-item');\r\n        li.innerHTML = el.title;\r\n        audioPlayList.append(li);\r\n\r\n        const btn = document.createElement('span');\r\n        btn.classList.add('play');\r\n        btn.classList.add('play-item-btn');\r\n\r\n        li.append(btn);\r\n        }\r\n    )\r\n    playListItem =  document.querySelectorAll('.play-item');\r\n    playListBtn = document.querySelectorAll('.play-item-btn');\r\n}\r\n\r\nfunction playAudio() {\r\n    playListItem.forEach(function (item) {\r\n        if (item.classList.contains('item-active')) {\r\n            item.classList.remove('item-active');\r\n        }\r\n    });\r\n    playListBtn.forEach(function (item) {\r\n        if (item.classList.contains('pause')) {\r\n            item.classList.remove('pause');\r\n        }\r\n    });\r\n    audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][audioNumber].src;\r\n    audio.currentTime = currentTimeGlobal;\r\n    setDurationTime(_playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][audioNumber].duration);\r\n    if(!isPlay) {\r\n        isPlay = true;\r\n        audio.volume = audioVolume.value/100;\r\n        audio.play();\r\n        audioCurrentName.innerHTML = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][audioNumber].title;\r\n        playListBtn[audioNumber].classList.add('pause');\r\n        playListItem[audioNumber].classList.add('item-active');\r\n        audioButtonPlay.classList.add('pause');\r\n        setExactTime();\r\n    } else {\r\n        audio.pause();\r\n        isPlay = false;\r\n        audioButtonPlay.classList.remove('pause');\r\n    };\r\n}\r\n\r\nfunction playChoosenAudio () {\r\n    for (let i = 0; i<playListBtn.length; i++){        \r\n        playListBtn[i].addEventListener('click', function() {\r\n            if (i == audioNumber && isPlay) {\r\n                isPlay = true;\r\n                currentTimeGlobal = audio.currentTime;\r\n                playAudio();\r\n            } else {\r\n                if (i != audioNumber) {\r\n                    currentTimeGlobal = 0;\r\n                }\r\n                playListBtn.forEach((item) => item.classList.remove('pause'))\r\n                playListBtn[i].classList.add('pause');\r\n                audioNumber = i;\r\n                isPlay = false;\r\n                playAudio();\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nfunction playNext() {\r\n    if (audioNumber==_playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length-1) {\r\n        audioNumber = 0;\r\n    } else {\r\n        audioNumber++;    \r\n    }\r\n    if (!audioButtonPlay.classList.contains('pause')) {\r\n        audioButtonPlay.classList.add('pause');\r\n    }\r\n    isPlay = false;\r\n    currentTimeGlobal = 0;\r\n    playAudio();\r\n}\r\n\r\nfunction playPrev() {\r\n    if (audioNumber==0) {\r\n        audioNumber = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length-1;\r\n    } else {\r\n        audioNumber--;    \r\n    }\r\n    if (!audioButtonPlay.classList.contains('pause')) {\r\n        audioButtonPlay.classList.add('pause');\r\n    }\r\n    isPlay = false;\r\n    currentTimeGlobal = 0;\r\n    playAudio();\r\n}\r\n\r\nfunction updateProgress(e) {\r\n    const {currentTime, duration} = e.srcElement;\r\n    const currentValue = currentTime / duration *100;\r\n    if (!isNaN(currentValue))  {\r\n        currentTimeGlobal = currentTime; \r\n        audioProgress.value = currentValue;\r\n    }\r\n}\r\n\r\nfunction setProgress() {\r\n    const audioDuration = audio.duration;\r\n    audio.currentTime = audioProgress.value / 100 * audioDuration;\r\n    audio.addEventListener('timeupdate', updateProgress);\r\n}\r\n\r\nfunction setValue() {\r\n    audio.volume = audioVolume.value/100;\r\n}\r\n\r\nfunction muteAudio() {\r\n    if (audioVolume.value > 0) {\r\n        currentVolume = audioVolume.value;\r\n        audioVolume.value = 0;\r\n        audioMuteButton.innerHTML = \"Выкл\"\r\n        setValue();\r\n    } else {\r\n        audioVolume.value = currentVolume;\r\n        audioMuteButton.innerHTML = \"Вкл\"\r\n        setValue();\r\n    }\r\n}\r\n\r\nfunction convertTime(duration) {\r\n    let minutes, seconds, minutesString, secondsString;\r\n    minutes = Math.floor(duration/60);\r\n    seconds = Math.floor(duration%60);\r\n    minutesString = (minutes<10)?\"0\"+String(minutes):String(minutes);\r\n    secondsString = (seconds<10)?\"0\"+String(seconds):String(seconds);\r\n    return `${minutesString}:${secondsString}`;\r\n}\r\n\r\nfunction setDurationTime(duration) {\r\n    audioDurationTime.innerHTML = convertTime(duration);\r\n}\r\n\r\nfunction setExactTime() {\r\n    audioExactTime.innerHTML = convertTime(currentTimeGlobal);\r\n    setTimeout(setExactTime, 100);\r\n}\r\n\r\nfunction initPlayList() {  \r\n    createPlayList(); \r\n    audioButtonPlayNext.addEventListener('click', playNext);\r\n    audioButtonPlayPrev.addEventListener('click', playPrev);\r\n    audioButtonPlay.addEventListener('click', playAudio);\r\n    audio.addEventListener('ended', playNext);\r\n    audioProgress.addEventListener('change', setProgress)\r\n    audioVolume.addEventListener('change', setValue);\r\n    audioMuteButton.addEventListener('click', muteAudio);\r\n    audio.addEventListener('timeupdate', updateProgress);\r\n    audioProgress.oninput = function() {\r\n    audio.removeEventListener('timeupdate', updateProgress);\r\n    }\r\n    playChoosenAudio(); \r\n}\r\n\r\n\n\n//# sourceURL=webpack://momentum/./assets/js/player.js?");

/***/ }),

/***/ "./assets/js/quotes.js":
/*!*****************************!*\
  !*** ./assets/js/quotes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst quoteText = document.querySelector('.quote');\r\nconst quoteAuthor = document.querySelector('.author');\r\nconst quoteButton = document.querySelector('.change-quote');\r\n\r\nfunction getRandomNum(max) {\r\n    return Math.floor(Math.random() * max + 1);\r\n}\r\n\r\nasync function getQuotes() {\r\n    let lang = localStorage.getItem('lang')\r\n    const quotes = 'data.json';\r\n    const res = await fetch(quotes);\r\n    const data = await res.json();\r\n    quoteText.innerHTML = data[lang][getRandomNum(data[lang].length)].text;\r\n    quoteAuthor.innerHTML = data[lang][getRandomNum(data[lang].length)].author;\r\n}\r\nfunction initQuotes() {\r\n    getQuotes();\r\n    quoteButton.addEventListener('click', getQuotes);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initQuotes);\r\n\n\n//# sourceURL=webpack://momentum/./assets/js/quotes.js?");

/***/ }),

/***/ "./assets/js/slider.js":
/*!*****************************!*\
  !*** ./assets/js/slider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSliders)\n/* harmony export */ });\nlet randomNum = getRandomNum(20);\r\nconst prevSlideButtom = document.querySelector('.slide-prev');\r\nconst nextSlideButtom = document.querySelector('.slide-next');\r\nconst body = document.getElementById('body');\r\n\r\nfunction getRandomNum(max) {\r\n    return Math.floor(Math.random() * max + 1);\r\n}\r\n//export default getRandomNum;\r\n\r\nfunction getTimeOfDay() {\r\n    const listTimeOfDay = ['night', 'morning', 'afternoon', 'evening'];\r\n    const currentDate = new Date;\r\n    const hours = currentDate.getHours();\r\n    return listTimeOfDay[Math.floor(hours / 6)];\r\n}\r\n\r\nfunction setBg(random) {\r\n    const img = new Image();\r\n    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${String(random).padStart(2, \"0\")}.jpg`;\r\n    img.onload = () => {\r\n        body.style.background = `url(${img.src})`;\r\n    }\r\n}\r\n\r\nfunction getSlidePrev() {\r\n    (randomNum == 1) ? randomNum = 20 : randomNum--;\r\n    setBg(randomNum);\r\n}\r\n\r\nfunction getSlideNext() {\r\n    (randomNum == 20) ? randomNum = 1 : randomNum++;\r\n    setBg(randomNum);\r\n}\r\n\r\nfunction initSliders() {\r\n    setBg(randomNum);\r\n    prevSlideButtom.addEventListener('click', getSlidePrev)\r\n    nextSlideButtom.addEventListener('click', getSlideNext)\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./assets/js/slider.js?");

/***/ }),

/***/ "./assets/js/translation.js":
/*!**********************************!*\
  !*** ./assets/js/translation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTraslation)\n/* harmony export */ });\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting */ \"./assets/js/greeting.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./assets/js/weather.js\");\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes */ \"./assets/js/quotes.js\");\n\r\n\r\n\r\n\r\nfunction translateGreating(){ \r\n    let currentLanguage = localStorage.getItem('lang');\r\n    if (currentLanguage==\"en\") {\r\n        localStorage.setItem('lang', 'ru');\r\n    } else {\r\n        localStorage.setItem('lang', 'en');\r\n    }\r\n}\r\n\r\n\r\nfunction initTraslation() {\r\n    document.addEventListener('click', function() {\r\n        translateGreating()\r\n        ;(0,_weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        (0,_quotes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        (0,_greeting__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://momentum/./assets/js/translation.js?");

/***/ }),

/***/ "./assets/js/weather.js":
/*!******************************!*\
  !*** ./assets/js/weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWeather),\n/* harmony export */   \"getWheter\": () => (/* binding */ getWheter)\n/* harmony export */ });\nconst weatherBlock = document.querySelector('.weather')\r\nconst weatherIcon = document.querySelector('.weather-icon');\r\nconst weatherTemp = document.querySelector('.temperature');\r\nconst weatherWind = document.querySelector('.wind');\r\nconst weatherHumidity = document.querySelector('.humidity');\r\nconst weatherDescription = document.querySelector('.weather-description');\r\nconst LANGUAGES = {\r\n    wind: {\r\n        ru: \"Скорость ветра: \",\r\n        en: \"Wind speed: \"\r\n    },\r\n    speed: {\r\n        ru: \" м/c\",\r\n        en: \" m/s\"\r\n    },\r\n    humidity: {\r\n        ru: \"Влажность: \",\r\n        en: \"Humidity: \"\r\n    }\r\n    \r\n}\r\nlet country;\r\n\r\n\r\nasync function getWheter() {\r\n    let lang = localStorage.getItem('lang');\r\n    try {\r\n        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.value}&lang=${lang}&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;\r\n        const res = await fetch(url);\r\n        const data = await res.json();\r\n        weatherIcon.className = 'weather-icon owf';\r\n        weatherIcon.classList.add(`owf-${data.weather[0].id}`)\r\n        weatherTemp.innerHTML = `${Math.round(data.main.temp)}°C`;\r\n        weatherWind.innerHTML = `${LANGUAGES.wind[lang]} ${Math.round(data.wind.speed)} ${LANGUAGES.speed[lang]}`;\r\n        weatherHumidity.innerHTML = `${LANGUAGES.humidity[lang]} ${data.main.humidity}%`;\r\n        weatherDescription.innerHTML = data.weather[0].description;\r\n        window.addEventListener('beforeunload', setLocaleStorage);\r\n    } catch {\r\n        country.value = 'Минск';\r\n        alert(\"city doesn't exist\")\r\n        const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=${lang}&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;\r\n        const res = await fetch(url);\r\n        const data = await res.json();\r\n        weatherIcon.className = 'weather-icon owf';\r\n        weatherIcon.classList.add(`owf-${data.weather[0].id}`)\r\n        weatherTemp.innerHTML = `${Math.round(data.main.temp)}°C`;\r\n        weatherWind.innerHTML = `${LANGUAGES.wind[lang]} ${Math.round(data.wind.speed)} ${LANGUAGES.speed[lang]}`;\r\n        weatherHumidity.innerHTML = `${LANGUAGES.humidity[lang]} ${data.main.humidity}%`;\r\n        weatherDescription.innerHTML = data.weather[0].description;\r\n        window.removeEventListener('beforeunload', setLocaleStorage);\r\n    }\r\n    \r\n}\r\n\r\nfunction createCity() {\r\n    if (weatherBlock.firstChild.classList) {\r\n        weatherBlock.firstChild.remove();\r\n    }\r\n    const city = document.createElement('input');\r\n    city.type = \"text\";\r\n    city.classList.add('city');\r\n    if (localStorage.getItem('city')) {\r\n        city.value = localStorage.getItem('city');\r\n    } else {\r\n        city.value = \"Минск\";\r\n    }\r\n    weatherBlock.prepend(city);\r\n    country = document.querySelector('.city');\r\n}\r\n\r\nfunction setLocaleStorage() {\r\n    localStorage.setItem('city', country.value)\r\n}\r\n\r\nfunction getLocaleStorage() {\r\n    if (localStorage.getItem('city')) {\r\n        country.value = localStorage.getItem('city');\r\n    }\r\n}\r\n\r\nfunction initWeather() {\r\n    createCity();\r\n    country.addEventListener('change', getWheter);\r\n    getWheter();\r\n    window.addEventListener('load', getLocaleStorage);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://momentum/./assets/js/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;