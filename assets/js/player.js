import playList from "./playList.js";
const audio = new Audio();
const audioButtonPlay = document.querySelector('.play');
const audioButtonPlayNext = document.querySelector('.play-next');
const audioButtonPlayPrev = document.querySelector('.play-prev');
const audioPlayList = document.querySelector('.play-list');
const audioProgress = document.getElementById('progress__audio');
const audioVolume = document.querySelector('.volume');
const audioCurrentName = document.querySelector('.track__name');
const audioCurrentSinger = document.querySelector('.track__singer');
const audioMuteButton = document.querySelector('.audio-mute');
const audioExactTime = document.getElementById('exact-time');
const audioDurationTime = document.getElementById('duration-time');
const audioPlayListButton = document.getElementById('playlist__btn');
const audioWrapper = document.querySelector('.audio__wrapper');
const audioCurrentImage = document.querySelector('.audio__image');
const audioCurrentBackgroundImage = document.querySelector('.player-background');
const audioPlayListItems = document.querySelectorAll('.playlist-button__item');
let currentTimeGlobal = 0;
let currentVolume;
let isPlay = false;
let audioNumber = 0;
let playListItem;
let playListBtn;

const audioCurrentVolumeBg = {
    off: `url(assets/svg/volume-off.svg) center center / cover no-repeat`,
    middle: `url(assets/svg/volume-middle.svg) center center / cover no-repeat`,
    max: `url(assets/svg/volume-max.svg) center center / cover no-repeat`,
}

function createPlayList() {
    playList.forEach(function (el) {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.innerHTML = el.title;
        audioPlayList.append(li);

        const btn = document.createElement('span');
        btn.classList.add('play');
        btn.classList.add('play-item-btn');

        li.append(btn);
        }
    )
    playListItem =  document.querySelectorAll('.play-item');
    playListBtn = document.querySelectorAll('.play-item-btn');
}

function playAudio() {
    playListItem.forEach(function (item) {
        if (item.classList.contains('item-active')) {
            item.classList.remove('item-active');
        }
    });
    playListBtn.forEach(function (item) {
        if (item.classList.contains('pause')) {
            item.classList.remove('pause');
        }
    });
    audio.src = playList[audioNumber].src;
    audio.currentTime = currentTimeGlobal;
    setDurationTime(playList[audioNumber].duration);
    if(!isPlay) {
        isPlay = true;
        audio.volume = audioVolume.value/100;
        audio.play();
        audioCurrentName.innerHTML = playList[audioNumber].title;
        audioCurrentSinger.innerHTML = playList[audioNumber].singer;
        setAudioBackground(audioNumber);
        playListBtn[audioNumber].classList.add('pause');
        playListItem[audioNumber].classList.add('item-active');
        audioButtonPlay.classList.add('pause');
        setExactTime();
    } else {
        audio.pause();
        isPlay = false;
        audioButtonPlay.classList.remove('pause');
    };
}

function playChoosenAudio () {
    for (let i = 0; i<playListBtn.length; i++){        
        playListBtn[i].addEventListener('click', function() {
            if (i == audioNumber && isPlay) {
                isPlay = true;
                currentTimeGlobal = audio.currentTime;
                playAudio();
            } else {
                if (i != audioNumber) {
                    currentTimeGlobal = 0;
                }
                playListBtn.forEach((item) => item.classList.remove('pause'))
                playListBtn[i].classList.add('pause');
                audioNumber = i;
                isPlay = false;
                playAudio();
            }
        })
    }
}

function playNext() {
    if (audioNumber==playList.length-1) {
        audioNumber = 0;
    } else {
        audioNumber++;    
    }
    if (!audioButtonPlay.classList.contains('pause')) {
        audioButtonPlay.classList.add('pause');
    }
    isPlay = false;
    currentTimeGlobal = 0;
    playAudio();
}

function playPrev() {
    if (audioNumber==0) {
        audioNumber = playList.length-1;
    } else {
        audioNumber--;    
    }
    if (!audioButtonPlay.classList.contains('pause')) {
        audioButtonPlay.classList.add('pause');
    }
    isPlay = false;
    currentTimeGlobal = 0;
    playAudio();
}

function updateProgress(e) {
    const {currentTime, duration} = e.srcElement;
    const currentValue = currentTime / duration *100;
    if (!isNaN(currentValue))  {
        currentTimeGlobal = currentTime; 
        audioProgress.value = currentValue;
    }
}

function setProgress() {
    const audioDuration = audio.duration;
    audio.currentTime = audioProgress.value / 100 * audioDuration;
    audio.addEventListener('timeupdate', updateProgress);
}

function setValue() {
    audio.volume = audioVolume.value/100;
    audioMuteButton.style.background = audioCurrentVolumeBg[checkAudioVolume(audioVolume.value)];
}

function checkAudioVolume(value) {
    let result;
    if (value == 0) {
        result = 'off';
    } else if (value < 50){
        result = 'middle';
    } else {
        result = 'max';
    }
    return result;
}

function muteAudio() {
    if (audioVolume.value > 0) {
        currentVolume = audioVolume.value;
        audioVolume.value = 0;
        setValue();
    } else {
        audioVolume.value = currentVolume;
        setValue();
    }
}

function convertTime(duration) {
    let minutes, seconds, minutesString, secondsString;
    minutes = Math.floor(duration/60);
    seconds = Math.floor(duration%60);
    minutesString = (minutes<10)?"0"+String(minutes):String(minutes);
    secondsString = (seconds<10)?"0"+String(seconds):String(seconds);
    return `${minutesString}:${secondsString}`;
}

function setDurationTime(duration) {
    audioDurationTime.innerHTML = convertTime(duration);
}

function setExactTime() {
    audioExactTime.innerHTML = convertTime(currentTimeGlobal);
    setTimeout(setExactTime, 100);
}

audioPlayListButton.addEventListener('click', function() {
    audioPlayList.classList.toggle('play-list-visible');
    audioWrapper.classList.toggle('play-list-invisible');

    audioPlayListItems.forEach((item) => item.classList.toggle('playlist-button__item-active'))
})

function setAudioBackground(num) {
    const img = new Image();
    img.src = playList[num].img;
    console.log(img.src);
    img.onload = () => {
        audioCurrentBackgroundImage.style.background = `url(${img.src}) center center / cover no-repeat`; 
        audioCurrentImage.style.background = `url(${img.src}) center center / cover no-repeat`;  
    }
}

export default function initPlayList() {  
    createPlayList(); 
    audioButtonPlayNext.addEventListener('click', playNext);
    audioButtonPlayPrev.addEventListener('click', playPrev);
    audioButtonPlay.addEventListener('click', playAudio);
    audio.addEventListener('ended', playNext);
    audioProgress.addEventListener('change', setProgress)
    audioVolume.addEventListener('change', setValue);
    audioMuteButton.addEventListener('click', muteAudio);
    audio.addEventListener('timeupdate', updateProgress);
    audioProgress.oninput = function() {
    audio.removeEventListener('timeupdate', updateProgress);
    }
    playChoosenAudio(); 
}

