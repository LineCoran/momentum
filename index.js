//const time = document.querySelector('.time');

//const date = document.querySelector('.date');

// const greeting = document.querySelector('.greeting');
// const name = document.querySelector('.name');

// let randomNum = getRandomNum(20);
// const prevSlideButtom = document.querySelector('.slide-prev');
// const nextSlideButtom = document.querySelector('.slide-next');
// const body = document.getElementById('body');

// const city = document.querySelector('.city');
// const weatherIcon = document.querySelector('.weather-icon');
// const weatherTemp = document.querySelector('.temperature');
// const weatherWind = document.querySelector('.wind');
// const weatherHumidity = document.querySelector('.humidity');
// const weatherDescription = document.querySelector('.weather-description');

// const quoteText = document.querySelector('.quote');
// const quoteAuthor = document.querySelector('.author');
// const quoteButton = document.querySelector('.change-quote');

// const audio = new Audio();
// const audioButtonPlay = document.querySelector('.play');
// const audioButtonPlayNext = document.querySelector('.play-next');
// const audioButtonPlayPrev = document.querySelector('.play-prev');
// const audioPlayList = document.querySelector('.play-list');
// let isPlay = false;
// let audioNumber = 0;
// import playList from './assets/js/playList.js';



// function showTime() {
//     const date = new Date;
//     const currentTime = date.toLocaleTimeString();
//     time.innerHTML = currentTime;
//     setInterval(showTime, 1000);
//     setInterval(showDate, 1000);
// }

// function showDate() {
//     const dateValue = new Date;
//     const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' };
//     const currentDate = dateValue.toLocaleDateString('en-EN', options);
//     date.innerHTML = currentDate;
// }

// function getTimeOfDay() {
//     const listTimeOfDay = ['night', 'morning', 'day', 'evening'];
//     const currentDate = new Date;
//     const hours = currentDate.getHours();
//     return listTimeOfDay[Math.floor(hours / 6)];
// }

// function showGreeting() {
//     const timeOfDay = getTimeOfDay()
//     const greetingText = `Good ${timeOfDay}`;
//     greeting.innerHTML = greetingText;
// }

// function setLocaleStorage() {
//     localStorage.setItem('name', name.value)
// }

// function getLocaleStorage() {
//     if (localStorage.getItem('name')) {
//         name.value = localStorage.getItem('name');
//     }
// }

//background image

// function getRandomNum(max) {
//     return Math.floor(Math.random() * max + 1);
// }

// function setBg(random) {
//     const img = new Image();
//     img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${String(random).padStart(2, "0")}.jpg`;
//     img.onload = () => {
//         body.style.background = `url(${img.src})`;
//     }
// }

// function getSlidePrev() {
//     (randomNum == 1) ? randomNum = 20 : randomNum--;
//     setBg(randomNum);
// }

// function getSlideNext() {
//     (randomNum == 20) ? randomNum = 1 : randomNum++;
//     setBg(randomNum);
// }

//Whether 

// async function getWheter() {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;
//     const res = await fetch(url);
//     const data = await res.json();
//     weatherIcon.className = 'weather-icon owf';
//     weatherIcon.classList.add(`owf-${data.weather[0].id}`)
//     weatherTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
//     weatherWind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
//     weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
//     weatherDescription.innerHTML = data.weather[0].description;
// }

//Quotes

// async function getQuotes() {
//     const quotes = 'data.json';
//     const res = await fetch(quotes);
//     const data = await res.json();
//     quoteText.innerHTML = data[getRandomNum(data.length)].text;
//     quoteAuthor.innerHTML = data[getRandomNum(data.length)].author;
// }

// playAudio

// function playAudio() {
//     playListItem.forEach(function (item) {
//         if (item.classList.contains('item-active')) {
//             item.classList.remove('item-active');
//         }
//     });
//     audio.src = playList[audioNumber].src;
//     audio.currentTime = 0;
//     if(!isPlay) {
//         isPlay = true;
//         audio.play();
//         playListItem[audioNumber].classList.add('item-active');
//     } else {
//         audio.pause();
//         isPlay = false;
//     };
// }


// function playNext() {
//     if (audioNumber==playList.length-1) {
//         audioNumber = 0;
//     } else {
//         audioNumber++;    
//     }
//     if (!audioButtonPlay.classList.contains('pause')) {
//         audioButtonPlay.classList.add('pause');
//     }
//     isPlay = false;
//     playAudio(audioNumber);
// }

// function playPrev() {
//     if (audioNumber==0) {
//         audioNumber = playList.length-1;
//     } else {
//         audioNumber--;    
//     }
//     if (!audioButtonPlay.classList.contains('pause')) {
//         audioButtonPlay.classList.add('pause');
//     }
//     isPlay = false;
//     playAudio(audioNumber);
// }

// function createPlayList() {
//         playList.forEach(function (el) {
//             const li = document.createElement('li');
//             li.classList.add('play-item');
//             li.innerHTML = el.title;
//             audioPlayList.append(li);
//         }
//     )
// }

// getWheter();

// showTime();

// showDate();

// showGreeting();

// setBg(randomNum);

// getQuotes();

// createPlayList();
// const playListItem =  document.querySelectorAll('.play-item');

// window.addEventListener('beforeunload', setLocaleStorage);
// window.addEventListener('load', getLocaleStorage);

// prevSlideButtom.addEventListener('click', getSlidePrev)
// nextSlideButtom.addEventListener('click', getSlideNext)

// city.addEventListener('change', getWheter);

// quoteButton.addEventListener('click', getQuotes);

// audioButtonPlayNext.addEventListener('click', playNext);
// audioButtonPlayPrev.addEventListener('click', playPrev);
// audioButtonPlay.addEventListener('click', playAudio);
// audioButtonPlay.addEventListener('click', function () {
//     audioButtonPlay.classList.toggle('pause');
// })
