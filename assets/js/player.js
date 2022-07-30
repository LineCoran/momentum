

const audio = new Audio();
const audioButtonPlay = document.querySelector('.play');
const audioButtonPlayNext = document.querySelector('.play-next');
const audioButtonPlayPrev = document.querySelector('.play-prev');
const audioPlayList = document.querySelector('.play-list');
let isPlay = false;
let audioNumber = 0;

import playList from './playList.js';
console.log(playList);


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
        audio.play();
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

function createPlayList() {
        playList.forEach(function (el) {
            const li = document.createElement('li');
            li.classList.add('play-item');
            li.innerHTML = el.title;
            audioPlayList.append(li);
        }
    )
}

createPlayList();
const playListItem =  document.querySelectorAll('.play-item');

audioButtonPlayNext.addEventListener('click', playNext);
audioButtonPlayPrev.addEventListener('click', playPrev);
audioButtonPlay.addEventListener('click', playAudio);
audioButtonPlay.addEventListener('click', function () {
    audioButtonPlay.classList.toggle('pause');
})
