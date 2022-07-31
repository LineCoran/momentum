const audio = new Audio();
const audioButtonPlay = document.querySelector('.play');
const audioButtonPlayNext = document.querySelector('.play-next');
const audioButtonPlayPrev = document.querySelector('.play-prev');
const audioPlayList = document.querySelector('.play-list');
const audioProgress = document.querySelector('.progress');
const audioProgressContainer = document.querySelector('.progress__container');
const audioVolume = document.querySelector('.volume');
const audioCurrentName = document.querySelector('.track__name');
let isPlay = false;
let audioNumber = 0;
let playListItem;

function createPlayList() {
    playList.forEach(function (el) {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.innerHTML = el.title;
        audioPlayList.append(li);
        }
    )
    playListItem =  document.querySelectorAll('.play-item');
}

function playAudio() {
    playListItem.forEach(function (item) {
        if (item.classList.contains('item-active')) {
            item.classList.remove('item-active');
        }
    });
    audio.src = playList[audioNumber].src;
    audio.currentTime = 0;
    if(!isPlay) {
        isPlay = true;
        audio.volume = audioVolume.value/100;
        audio.play();
        audioCurrentName.innerHTML = playList[audioNumber].title;
        playListItem[audioNumber].classList.add('item-active');
    } else {
        audio.pause();
        isPlay = false;
    };
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
    playAudio(audioNumber);
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
    playAudio(audioNumber);
}

function updateProgress(e) {
    const {currentTime, duration} = e.srcElement;
    audioProgress.style.width = `${currentTime / duration *100}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clientX = e.offsetX;
    const audioDuration = audio.duration;
    audio.currentTime = clientX / width *audioDuration;
}

function setValue() {
    audio.volume = audioVolume.value/100;
}

import playList from "./playList.js";

export default function initPlayList() {  
    createPlayList(); 
    audioButtonPlayNext.addEventListener('click', playNext);
    audioButtonPlayPrev.addEventListener('click', playPrev);
    audioButtonPlay.addEventListener('click', playAudio);
    audioButtonPlay.addEventListener('click', function () {
    audioButtonPlay.classList.toggle('pause');
    audio.addEventListener('ended', playNext);
    audio.addEventListener('timeupdate', updateProgress);
    audioProgressContainer.addEventListener('click', setProgress);
    audioVolume.addEventListener('change', setValue);
})
}

